const mongoose = require('../config/db');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');
const validator = require('validator');

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
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,

        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        },
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
    },
    online: {
        type: Boolean,
        default: false,
    },
    lastSeen: {
        type: Date,
        default: Date.now,
    },
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

module.exports = User;
