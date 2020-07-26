const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        min: 5,
        max: 20
    },
    email: {
        type: String,
        trim: true,
        required: true,
        min: 5,
        max: 50,
        unique: true
    },
    number: {
        type: String,
        trim: true,
        required: true,
        min: 5,
        max: 10
    },
    message: {
        type: String,
        trim: true,
        required: true,
        min: 10,
        max: 50
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', messageSchema);