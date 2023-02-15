const mongoose = require('mongoose')


const connectDB = () => {
    return mongoose.connect(process.env.DB_URL)
        .then(result => console.log('Connected DB'))
        .catch(err => console.log('Fail to connect!', err))
}

module.exports = connectDB