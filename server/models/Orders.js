const mongoose = require("mongoose");




const OrderSchema = new mongoose.Schema({
    price: Number,
    products: Array,
    email: String,
    address: Object,

})


// module.exports = mongoose.model('orders',OrderSchema)

const orderModel = mongoose.model("orders",OrderSchema)
module.exports = orderModel



