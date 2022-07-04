const mongoose = require('mongoose');

const creditReq = new mongoose.Schema({
    memberid: String,
    fullname: String,
    date: Date,
    amount: Number,
    partnercode: String,
    loyaltyprogramme: String
})

module.exports = mongoose.model("creditreqs", creditReq)