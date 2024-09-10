const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    price:Number,
    desc: String
})

// module.exports = mongoose.model("products",productSchema);

const productModel = mongoose.model("products",productSchema)
module.exports = productModel


