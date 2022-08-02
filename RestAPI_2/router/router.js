const express = require("express");
const router = express.Router()
const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

router.post("/userRegistration", async (req, resp) => {

    const user = new User(req.body)
    try {

        const result = await user.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})


router.post("/userLogin", async (req, resp) => {
    try {
        const email = req.body.email
        const pass = req.body.password

        const user = await User.findOne({ email: email });

        const isMatch = await bcrypt.compare(pass, user.password)



        if (isMatch) {

            const token = await jwt.sign({ _id: user._id }, "thisismyapiauthenticationkey")
            resp.header('auth-token', token).send("this is your api token : " + token)

        }
        else {
            resp.send("Invalid username or password")
        }


    } catch (error) {
        resp.send("Invalid username or password")
    }
})



module.exports = router
