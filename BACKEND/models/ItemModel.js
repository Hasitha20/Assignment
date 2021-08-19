const mongoose = require ('mongoose');

const ItemSchema = new mongoose.Schema({
    itemcode: {
        type: String, 
        unique: true,      
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
})

module.exports = mongoose.model("Items", ItemSchema )