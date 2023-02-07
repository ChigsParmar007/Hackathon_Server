const express = require('express')
const employeeController = require('../Controllers/employeeController')
const router = express.Router()

router
    .post('/', authController.signup)

module.exports = router