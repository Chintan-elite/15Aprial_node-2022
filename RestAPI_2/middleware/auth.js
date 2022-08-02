const jwt = require("jsonwebtoken")


const auth = async (req, resp, next) => {

    const token = req.header('auth-token')
    console.log(token)

    try {

        const user = jwt.verify(token, "thisismyapiauthenticationkey");

        req.user = user;
        next();
    } catch (error) {
        resp.send("Invalid token !!!")
    }

}

module.exports = auth