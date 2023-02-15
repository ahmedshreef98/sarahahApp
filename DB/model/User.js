const mongoose = require('mongoose')
const bcrybt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true  //Don't need to check email 
    },
    password: {
        type: String,
        required: true
    },
    phone: String,
    age: Number,
    emailConfirm: { type: Boolean, default: false },
    role: { type: String, default: "User" },
    gender: { type: String, default: "Male" },
    profilePic: { type: String },
}
    , { timesTamps: true })  //Added Created At & updatedAt

//  Mongoose Hooks 
userSchema.pre('save', async function (next) {
    this.password = await bcrybt.hash(this.password, parseInt(process.env.saltRounds))
    console.log(this);
    next()
})

const userModel = mongoose.model("User", userSchema)
module.exports = userModel