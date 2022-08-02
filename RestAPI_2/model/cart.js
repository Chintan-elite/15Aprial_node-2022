const mongoose = require("mongoose")


const cartSchema = new mongoose.Schema(
    {
        uid: String,
        pid: String
    }
)

module.exports = mongoose.model("Cart", cartSchema)