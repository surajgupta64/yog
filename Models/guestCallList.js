let mongoose = require('mongoose')

let guestCallList = new mongoose.Schema({
    username: String,
    name: String,
    mobile: Number,
    email: String,
    category: String,
    address: String,
    event: String,
}, { timestamps: true })

module.exports = mongoose.model('guestCallList', guestCallList);
