const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,

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
    password: {
        type: String,
        required: true,
        trim: true,

        validate(value) {
            if (value.length < 6) {
                throw new Error('Password must be at least 6 characters long');
            }
        }
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

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
}
);

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await user.findOne({ email });    
    if (!user) {
        throw new Error('No user with this email');
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error('Password is incorrect');
    }
    return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;


