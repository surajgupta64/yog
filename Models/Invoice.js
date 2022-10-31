let mongoose = require('mongoose')

let Invoice = new mongoose.Schema({
    username: String,
    date: Date,
    centerName: String,
    MemberId: String,
    MemberName: String,
    InvoiceNo: String,
    ServiceName: String,
    startDate: Date,
    endDate: Date,
    counseller: String,
    trainer: String,
    createdBy: String,
    amount: Number,
    tax: Number,
    totalAmount: Number,
    paidAmount: Number,
    pendingAmount: Number,
    paymode: String,
    writeoff: String,
    status: String,
}, { timestamps: true })

module.exports = mongoose.model('Invoice', Invoice);
