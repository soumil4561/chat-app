require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('./db/mongoose');

const cors = require('cors');
const MongoStore = require('connect-mongo');

app.use(cors(
    {
        origin: true,
        credentials: true
    }
));

const passport = require('passport');
const session = require('express-session');

app.use(session({
    secret: process.env.SESSION_SECRET, //to be made
    credentials: true,
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_HOST, 
        collectionName: 'sessions'
    })
}));

app.use(passport.initialize());
app.use(passport.session());

const authRouter = require('./routes/auth.js');
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
