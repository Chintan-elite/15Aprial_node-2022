const express = require("express");
const router = express.Router()
const Product = require("../model/product")
const Cart = require("../model/cart")
const auth = require("../middleware/auth")

router.post("/products", auth, async (req, resp) => {

    try {
        const product = new Product(req.body);
        const result = await product.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }

})

router.get("/products", auth, async (req, resp) => {

    try {

        const result = await Product.find();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }

})


router.post("/Carts/:pid", auth, async (req, resp) => {

    const pid = req.params.pid
    const uid = req.user._id;

    try {

        const cart = new Cart({
            pid: pid, uid: uid
        })

        const result = await cart.save();
        resp.send(result)

    } catch (error) {
        resp.send(error)
    }

})

router.get("/Carts", auth, async (req, resp) => {


    const uid = req.user._id;

    try {



        const result = await Cart.find({ uid: uid })
        resp.send(result)

    } catch (error) {
        resp.send(error)
    }

})



module.exports = router