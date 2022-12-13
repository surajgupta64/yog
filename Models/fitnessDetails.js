
let mongoose = require('mongoose')

let fitnessDetails = new mongoose.Schema({
    username: String,
    Measurement_Date: String,
    Member_ID: String,
    Fullname: String,
    ContactNumber: Number,
    Weight: String,
    Height: String,
    BMI: String,
    Age: String,
    Fat: String,
    Neck: String,
    Shoulder: String,
    Chest: String,
    ArmsR: String,
    ArmsL: String,
    ForArms: String,
    Waist: String,
    Hips: String,
    ThighR: String,
    ThighL: String,
    CalfR: String,
    CalfL: String,
    Counseller: String,
    NextFollowup_Date: Date,
}, { timestamps: true })

module.exports = mongoose.model('fitnessDetails', fitnessDetails);

