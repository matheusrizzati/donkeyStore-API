const mongoose = require("mongoose")

// const storeSchema = new mongoose.Schema({
//   storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
// })

const User = new mongoose.Schema({
    username: String,
    password: String,
    layouts: {
      type: [String],
      default: ['basic', 'teste', 'clean']
    }
    // stores: [storeSchema],
})

module.exports = mongoose.model('User', User)