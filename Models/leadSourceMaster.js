let mongoose = require('mongoose')

let leadSourceMaster = new mongoose.Schema({
    username: String,
    LeadSource: String,
    Status: String,
}, { timestamps: true })

module.exports = mongoose.model('leadSourceMaster', leadSourceMaster);
