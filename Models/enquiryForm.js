let mongoose = require('mongoose')

let enquiryForms = new mongoose.Schema({
    username: String,
    Fullname: String,
    Emailaddress: String,
    CountryCode: Number,
    ContactNumber: Number,
    Gander: String,
    DateofBirth: Date,
    address: String,
    Area: String,
    city: String,
    Profession: String,
    StaffName: String,
    CenterName: String,
    CallStatus: String,
    Message: String,
    person_Name: String,
    Relation: String,
    CountryCode12: Number,
    ContactNumber2: Number,
    EnquiryDate: Date,
    ServiceName: String,
    Customertype: String,
    enquirytype: String,
    appointmentDate: Date,
    appointmentTime: String,
    appointmentfor: String,
    status: String
}, { timestamps: true })

module.exports = mongoose.model('enquiryForms', enquiryForms);