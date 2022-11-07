let mongoose = require('mongoose')

let templateMaster = new mongoose.Schema({
    username: String,
    templateName: String,
    content: String,
    Status: String,
}, { timestamps: true })

module.exports = mongoose.model('templateMaster', templateMaster);
