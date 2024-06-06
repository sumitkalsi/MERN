const mongoose = require("mongoose");

const registerschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    dateofbirth: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role :{
        type: String,
        enum: ['user','admin'],
        default: 'user'
    }


});

module.exports = mongoose.model('Register', registerschema);

