const express = require('express')
const router = express.Router()
const NPS = require('../Models/npsModel')
const handlerFactory = require('../Controllers/handlerFactory')

router
    .route('/')
    .get(handlerFactory.getAllData(NPS))
    .post(handlerFactory.addData(NPS))

router
    .route('/:id')
    .delete(handlerFactory.deleteData(NPS))
    .get(handlerFactory.getData(NPS))

module.exports = router