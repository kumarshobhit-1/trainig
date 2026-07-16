const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: true,
    },
    l_name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    city : {
        type: String,
        required: true,
    },
    state : {
        type: String,
        required: true,
    },
} , { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;