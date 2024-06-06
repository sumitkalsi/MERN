const mongoose = require("mongoose");
const imageschema = new mongoose.Schema({
    filename:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    extention:{
        type:String,
        required:true
    }

});

const productschema = new mongoose.Schema({
    productname: {                                         
        type: String,
        required: true
    },

    prize: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    productimage: { filename:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    extention:{
        type:String,
        required:true
    }
}
    ,
    category: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('product', productschema);
