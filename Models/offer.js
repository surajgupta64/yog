
let mongoose = require('mongoose')

let offer = new mongoose.Schema({
    username: String,
    ServiceName: String,
    duration: String,
    fees: Number,
    dealName: String,
    startDate: Date,
    endDate: Date,
    discount: Number,
    netfees: Number,
    status: String,
}, { timestamps: true })

module.exports = mongoose.model('offer', offer);
