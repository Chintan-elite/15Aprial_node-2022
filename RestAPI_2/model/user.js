const mongoose = require("mongoose")
const { stringify } = require("querystring")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    date: {
        type: Date,
        default: Date.now
    }

})

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})

module.exports = mongoose.model("User", userSchema)