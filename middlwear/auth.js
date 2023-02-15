const jwt = require('jsonwebtoken');
const userModel = require('../DB/model/user');

//Check Logged in 

const auth = () => {
    return async (req, res, next) => {
        try {
            const headerToken = req.headers.authorization
            console.log(headerToken);

            if (!headerToken
                || headerToken == null
                || headerToken == undefined
                || !headerToken.startsWith(`${process.env.BearerTokenKey} `)) {
                res.json({ message: "INVALID TOKEN " })
            }
            else {
                const token = headerToken.split(' ')[1]
                const decoded = jwt.verify(token, process.env.tokenSignature)
                console.log(decoded);

                const findUser = await userModel.findById(decoded.id)
                if (!findUser) {
                    res.json({ message: "Invalid userId " })

                } else {
                    req.user = findUser
                    next()
                }

            }

        } catch (error) {
            if (error.message == 'invalid signature') {
                res.json({ message: "Invalid Token Signature", error })

            } else {
                res.json({ message: "Catch Error", error })

            }
        }

    }

}


module.exports = auth