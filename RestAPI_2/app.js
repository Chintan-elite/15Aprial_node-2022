const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/restDemo").then(() => {
    console.log("connected !!!")
}).catch(err => {
    console.log(err);
})

app.use(express.json())
const userrouter = require("./router/router")
app.use("/", userrouter)
const productrouter = require("./router/productrouter")
app.use("/", productrouter)


app.listen(3000, (req, resp) => {
    console.log("server runningon port 3000")
})
