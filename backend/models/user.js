const mongoose = require('../config/db');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: false
    },

    email:{
        type: String,
        required: true,
        unique: true,
        matches: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    profilePhoto: {
        type: String,
        default:"",
        required: false
    },

    googleID:{
        type: String
    },

    userCreated:{
        type: Date,
        default: Date.now
    }
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

module.exports = User;