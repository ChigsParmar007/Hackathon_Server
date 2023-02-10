const express = require('express')
const router = express.Router()
const increamentController = require('../Controllers/increamentController')
const handlerFactory = require('../Controllers/handlerFactory')
const INCREMENT = require('../Models/increamentModel')

router
    .route('/')
    .get(handlerFactory.getAllData(INCREMENT))
    .post(handlerFactory.addData(INCREMENT))

router
    .route('/:id')
    .delete(handlerFactory.deleteData(INCREMENT))
    .get(handlerFactory.getData(INCREMENT))

module.exports = router