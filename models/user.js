// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, maxlength: 100 },
    email: { type: String, unique: true, maxlength: 50 },
    password: { type: String, maxlength: 50 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
