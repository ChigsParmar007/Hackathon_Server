const express = require('express')
const cors = require("cors")

const AppError = require('./utils/appError')
const MLogin = require('./Routes/MLoginRoute')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/MLogin', MLogin)

module.exports = app