const express = require('express')
const router = express.Router()
const empeducationController = require('../Controllers/empeducationController')

router
    .route('/')
    .post(empeducationController.addEducation)
    .get(empeducationController.getAllEducation)

router
    .route('/getone')
    .post(empeducationController.getEducation)

module.exports = router