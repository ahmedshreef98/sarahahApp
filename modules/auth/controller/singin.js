const userModel = require("../../../DB/model/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const signin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            res.json({ message: "Invalid User Email" })

        } else {
            const match = await bcrypt.compare(password, user.password)
            if (!match) {
                res.json({ message: "Invalid User Password" })
            } else {
                const token = jwt.sign({ id: user._id, isLoggedIn: true }, process.env.tokenSignature, { expiresIn: 60 * 60 * 12 })
                res.json({ message: "Done", token })
            }
        }

    }
    catch (error) {
        if (error) {
            res.json({ message: "Error Signin", error })

        }
    }

}


module.exports = signin