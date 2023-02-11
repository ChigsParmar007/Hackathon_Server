const express = require('express')
const cors = require("cors")

const ministerRoute = require('./Routes/ministerRoute')
const cityRoute = require('./Routes/cityRoute')
const officeRoute = require('./Routes/officeRoute')
const employeeRoute = require('./Routes/employeeRoute')
const designationRoute = require('./Routes/designationRoute')
const adminloginRoute = require('./Routes/adminloginRoute')
const empeducationRoute = require('./Routes/empeducationRoute')
const hraRoute = require('./Routes/hraRoute')
const taRoute = require('./Routes/taRoute')
const claRoute = require('./Routes/claRoute')
const medicalRoute = require('./Routes/medicalRoute')
const daRoute = require('./Routes/daRoute')
const npsRoute = require('./Routes/npsRoute')
const increamentRoute = require('./Routes/increamentRoute')
const trackRecorRoute = require('./Routes/trackRecorRoute')
const promotionRequestRoute = require('./Routes/promotionRequestRoute')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/minister', ministerRoute)
app.use('/api/city', cityRoute)
app.use('/api/office', officeRoute)
app.use('/api/employee', employeeRoute)
app.use('/api/designation', designationRoute)
app.use('/api/admin', adminloginRoute)
app.use('/api/education', empeducationRoute)
app.use('/api/hra', hraRoute)
app.use('/api/ta', taRoute)
app.use('/api/cla', claRoute)
app.use('/api/medical', medicalRoute)
app.use('/api/da', daRoute)
app.use('/api/nps', npsRoute)
app.use('/api/increment', increamentRoute)
app.use('/api/track', trackRecorRoute)
app.use('/api/promotion', promotionRequestRoute)

module.exports = app