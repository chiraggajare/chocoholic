const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    price:Number,
    desc: String
})

const productModel = mongoose.model("products",productSchema)
module.exports = productModel