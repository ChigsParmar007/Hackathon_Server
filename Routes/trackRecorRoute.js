const express = require('express')
const router = express.Router()
const trackRecordController = require('../Controllers/trackRecordController')

router
    .route('/')
    .get(trackRecordController.getAllData)
    .post(trackRecordController.addData)

    router
    .route('/:id')
    .get(trackRecordController.getData)
module.exports = router 