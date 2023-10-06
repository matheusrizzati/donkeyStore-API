const mongoose = require("mongoose")

// const storeSchema = new mongoose.Schema({
//   storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
// })

const Product = new mongoose.Schema({
    name: String,
    price: Number,
    limited: Boolean,
    quantity: Number,
    category: String,
    isActive: Boolean,
    storeId: String,
})

module.exports = mongoose.model('Product', Product)