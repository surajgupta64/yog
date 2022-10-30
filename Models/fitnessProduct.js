let mongoose = require('mongoose')

let fitnessProduct = new mongoose.Schema({
    username: String,
    productCode: {
        type: Number,
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

module.exports = mongoose.model('fitnessProduct', fitnessProduct);
