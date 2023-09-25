const mongoose = require("mongoose")

// const storeSchema = new mongoose.Schema({
//   storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
// })

const User = new mongoose.Schema({
    username: String,
    password: String,
    stores: [{
      type: String,
      default: ''
    }]
    // stores: [storeSchema],
})

module.exports = mongoose.model('User', User)