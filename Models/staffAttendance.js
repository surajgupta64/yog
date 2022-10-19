
let mongoose = require('mongoose')

let staffAttentance = new mongoose.Schema({
    username: String,
    attentanceId: String,
    checkDate: Date,
    checkIn: String,
    checkOut: String,
}, { timestamps: true })

module.exports = mongoose.model('staffAttentance', staffAttentance);