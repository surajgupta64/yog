let mongoose = require('mongoose')

let stockListing = new mongoose.Schema({
    username: String,
    productCode: {
        type: String,
        unique: true,
    },
    productName: String,
    productPrice: Number,
    brandName: String,
    category: String,
    color: String,
    totalStock: Number,
    sold: Number,
    available: Number,
    soldBy: String,
}, { timestamps: true })

module.exports = mongoose.model('stockListing', stockListing);
