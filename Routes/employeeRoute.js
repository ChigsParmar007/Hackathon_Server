const express = require('express')
const router = express.Router()
const authController = require('../Controllers/authController')
const Employee = require('../Models/employeeModel')

router
    .post('/signup', authController.signup(Employee))

router
    .post('/login', authController.login(Employee))

router
    .get('/logout', authController.logout)

router
    .get('/', authController.getAll(Employee))

router
    .get('/:id', authController.getData(Employee))

module.exports = router