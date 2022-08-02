const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    pname: String,
    price: Number,
    qty: Number

})

module.exports = mongoose.model("Product", productSchema)