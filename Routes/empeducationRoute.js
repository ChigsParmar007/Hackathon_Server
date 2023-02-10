const express = require('express')
const router = express.Router()
const empeducationController = require('../Controllers/empeducationController')

router
    .route('/')
    .post(empeducationController.addEducation)
    .get(empeducationController.getAllEducation)

router
    .route('/:id')
    .delete(empeducationController.deleteEducation)
    .get(empeducationController.getEducation)

module.exports = router