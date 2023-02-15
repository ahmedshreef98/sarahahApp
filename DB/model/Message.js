const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    messageBody: {
        type: String,
        required: true
    },
    reciverId: {
        type: mongoose.Types.ObjectId,
        ref: "User", // refrence user model
        required: true
    },
    senderId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}
    , { timesTamps: true })//Added Created At & updatedAt



const messageModel = mongoose.model("Message", messageSchema)
module.exports = messageModel