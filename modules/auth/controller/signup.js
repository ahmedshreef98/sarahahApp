const userModel = require("../../../DB/model/user")



const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const newUser = new userModel({ name, email, password })
        const savedUser = await newUser.save()
        res.json({ message: "Signup Done", savedUser })

    }
    catch (error) {

        if (error.keyValue?.email) {
            res.json({ message: "Email already Exist !" })

        } else {
            res.json({ message: "Error Signup", error })

        }

    }

}


module.exports = signup