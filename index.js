
require("dotenv").config()
const express = require('express')
const connectDB = require('./DB/connection')
const moduleRouter = require('./modules/index.router')

const port = process.env.PORT
const app = express()
app.use(express.json())

app.use(moduleRouter.userRouter, moduleRouter.messageRouter, moduleRouter.authRouter)

connectDB()
app.listen(port, () => { console.log(`Server Running on port :${port}`); }) 