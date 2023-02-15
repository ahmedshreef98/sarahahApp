const userModel = require("../../../DB/model/user")

const displayProfile = async (req, res) => {
    console.log(req.user);
    const user = await userModel.findById(req.user._id)
    res.json({ message: "Done Profile", user })
}

module.exports = displayProfile