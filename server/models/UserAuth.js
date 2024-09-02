const mongoose = require("mongoose")

const ChocoSchema= new mongoose.Schema({
    name:String,
    phone: Number,
    email: String,
    password:String
})

const ChocoModel = mongoose.model("users", ChocoSchema)
module.exports = ChocoModel