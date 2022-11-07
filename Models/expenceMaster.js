let mongoose = require('mongoose')

let expenseMaster = new mongoose.Schema({
    username: String,
    CategoryName: String,
    ApprovalLevel1: Boolean,
    ApprovalLevel2: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('expenseMaster', expenseMaster);
