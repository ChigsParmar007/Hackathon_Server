const express = require('express')
const router = express.Router()
const employeeController = require('../Controllers/employeeController')
const authController = require('../Controllers/authController')
const Employee = require('../Models/employeeModel')

router
    .post('/signup', authController.signup(Employee))

router
    .post('/login', authController.login(Employee))

router
    .get('/logout', authController.logout)

module.exports = router