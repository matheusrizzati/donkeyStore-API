const mongoose = require("mongoose")

const Category = new mongoose.Schema({
    name: String,
    storeId: String,
})

module.exports = mongoose.model('Category', Category)