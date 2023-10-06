const mongoose = require("mongoose")

const Cupom = new mongoose.Schema({
    name: String,
    percentage: Number,
    isInteger: Boolean,
    integerValue: Number,
    usedTimes: Number,
    storeId: String
})

module.exports = mongoose.model('Cupom', Cupom)