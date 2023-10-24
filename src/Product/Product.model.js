const mongoose = require("mongoose")
// const aws = require('aws-sdk')

// const s3 = new aws.S3()

const Product = new mongoose.Schema({
    name: String,
    price: Number,
    limited: Boolean,
    quantity: Number,
    category: String,
    isActive: Boolean,
    image: String,
    storeId: String,
})

Product.pre('remove', function() {
    return s3.deleteObject({
        Bucket: 'donkeystore',
        Key: this.image
    }).promisse()
})
module.exports = mongoose.model('Product', Product)