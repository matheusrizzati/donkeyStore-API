const mongoose = require("mongoose")

const Store = new mongoose.Schema({
    storeName: String,
    ownerId: String
})

module.exports = mongoose.model('Store', Store)