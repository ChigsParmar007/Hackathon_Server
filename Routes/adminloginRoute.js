const express = require('express')
const router = express.Router()
const adminloginController = require('../Controllers/adminloginController')

router
    .route('/login')
    .post(adminloginController.login)

router
    .route('/')
    .post(adminloginController.addAdmin)

module.exports = router