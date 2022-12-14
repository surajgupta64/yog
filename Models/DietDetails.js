let mongoose = require('mongoose')

let DietDetails = new mongoose.Schema({
    username: String,
    DietStartDate: Date,
    Member_ID: String,
    Fullname: String,
    ContactNumber: Number,
    Gender: String,
    Purpose: String,
    DietEndDate: Date,
    ExpertAdvice: String,
    DietitianName: String,
}, { timestamps: true })

module.exports = mongoose.model('DietDetails', DietDetails);
