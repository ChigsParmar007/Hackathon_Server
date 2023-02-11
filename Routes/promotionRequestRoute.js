const express = require('express')
const router = express.Router()
const promotionRequestController = require('../Controllers/promotionRequestController')

router
    .route('/')
    .get(promotionRequestController.getAllData)
    .post(promotionRequestController.addData)

    router
    .route('/getone').post(promotionRequestController.getData)

module.exports = router 