let mongoose = require('mongoose')
let prospect = new mongoose.Schema({
    EnquiryID: String,
    CallDate: Date,
    Time: String,
    Name: String,
    Contact: Number,
    ServiceName: String,
    CallStatus: String,
    FollowupDate: Date,
    NextFollowupDate: Date,
    TimeFollowp: String,
    Discussion: String,
    Counseller: String,
}, { timestamps: true })

module.exports = mongoose.model('prospect', prospect);