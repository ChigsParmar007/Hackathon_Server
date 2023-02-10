const express = require('express')
const router = express.Router()
const HRA = require('../Models/hraModel')
const handlerFactory = require('../Controllers/handlerFactory')

router
    .route('/')
    .get(handlerFactory.getAllData(HRA))
    .post(handlerFactory.addData(HRA))

router
    .route('/:id')
    .delete(handlerFactory.deleteData(HRA))
    .get(handlerFactory.getData(HRA))

module.exports = router