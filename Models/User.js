let mongoose = require('mongoose')

let Users = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: String,
    dashboardAccess: String,
    status: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('Users', Users);