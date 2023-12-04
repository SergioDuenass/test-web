const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, require: true },
    role: { type: String, default: 'user' }
});

const User = mongoose.model("users", userSchema);

module.exports = User;