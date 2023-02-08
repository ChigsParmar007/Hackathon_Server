const express = require('express')
const cors = require("cors")

const AppError = require('./utils/appError')
const MLoginRoute = require('./Routes/MLoginRoute')
const cityRoute = require('./Routes/cityRoute')
const officeRoute = require('./Routes/officeRoute')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/MLogin', MLoginRoute)
app.use('/api/city', cityRoute)
app.use('/api/office', officeRoute)

module.exports = app