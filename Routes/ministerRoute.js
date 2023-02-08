const express = require('express')
const Minister = require('../Models/ministerModel')
const authController = require('../Controllers/authController')

const router = express.Router()

router
	.post('/signup', authController.signup(Minister))

router
	.post('/login', authController.login(Minister))

router
	.get('/logout', authController.logout)

router
	.get('/', authController.getAll(Minister))


module.exports = router