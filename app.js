const express = require('express')
const cors = require("cors")

const ministerRoute = require('./Routes/ministerRoute')
const cityRoute = require('./Routes/cityRoute')
const officeRoute = require('./Routes/officeRoute')
const employeeRoute = require('./Routes/employeeRoute')
const designationRoute = require('./Routes/designationRoute')
const empeducationRoute = require('./Routes/empeducationRoute')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/minister', ministerRoute)
app.use('/api/city', cityRoute)
app.use('/api/office', officeRoute)
app.use('/api/employee', employeeRoute)
app.use('/api/designation', designationRoute)
app.use('/api/education', empeducationRoute)


module.exports = app