const mongoose = require ('mongoose');

const StockSchema = new mongoose.Schema({
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
    qty: {
        type: Number,
        trim: true,
        required: true
    },
})

module.exports = mongoose.model("Stocks", StockSchema )