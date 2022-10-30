let mongoose = require('mongoose')

let impCallList = new mongoose.Schema({
    username: String,
    name: String,
    mobile: Number,
    email: String,
    category: String,
    address: String,
    company: String,
}, { timestamps: true })

module.exports = mongoose.model('impCallList', impCallList);
