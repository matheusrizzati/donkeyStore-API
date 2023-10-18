const mongoose = require("mongoose")

const Store = new mongoose.Schema({
    storeName: String,
    url: String,
    ownerId: String,
    layout: String,
    isActive: Boolean,
    paymentConfig: String,
})

module.exports = mongoose.model('Store', Store)