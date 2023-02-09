const express = require('express')
const router = express.Router()
const designationController = require('../Controllers/designationController')

router
    .route('/')
    .post(designationController.addDesignation)
    .get(designationController.getAllDesignation)

router
    .route('/:id')
    .get(designationController.deleteDesignation)

module.exports = router