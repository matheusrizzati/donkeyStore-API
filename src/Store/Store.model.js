const mongoose = require("mongoose")

const Store = new mongoose.Schema({
    storeName: String,
    url: String,
    ownerId: String,
    layout: String, 
})

module.exports = mongoose.model('Store', Store)