
let mongoose = require('mongoose')

let memberFroms = new mongoose.Schema({
    username: String,
    image: String,
    Fullname: String,
    CountryCode: String,
    ContactNumber: Number,
    WhatsappNumber: Number,
    Email: String,
    Gender: String,
    DateofBirth: Date,
    Anniversarydate: Date,
    startDate: Date,
    endDate: Date,
    Address: String,
    Area: String,
    city: String,
    pincode: String,
    state: String,
    BloodGroup: String,
    FacebookID: String,
    invoiceId: String,
    sms: Boolean,
    mail: Boolean,
    pushnotification: Boolean,
    Name: String,
    CountryCode1: String,
    ContactNumber1: Number,
    Relationship: String,
    serviceName: String,
    serviceVariation: String,
    Customertype: String,
    Leadsource: String,
    EnquiryType: String,
    AssignStaff: String,
    MemberManager: String,
    Batch: String,
    GeneralTrainer: String,
    AttendanceID: String,
    CenterID: String,
    LockerKeyNo: Number,
    PAN: String,
    AsthmaCOPD: Boolean,
    BackPain: Boolean,
    BoneFracture: Boolean,
    CarpalTunnel: Boolean,
    Diabetes: Boolean,
    DigestiveDisorder: Boolean,
    Epilepsy: Boolean,
    FootPain: Boolean,
    Glaucoma: Boolean,
    HeartDiseaseCondition: Boolean,
    HerniaDiastasisRecti: Boolean,
    HighBloodPressure: Boolean,
    Other: String,
    Weight: String,
    Height: String,
    fitnessLevel: String,
    fitnessGoal: String,
    idealWeight: String,
    suggestion: String,
    comments: String,
    plan: Boolean,
    status: String,
}, { timestamps: true })

module.exports = mongoose.model('memberFroms', memberFroms);

