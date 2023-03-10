const express = require('express')
const router = express.Router()
const CLA = require('../Models/claModel')
const handlerFactory = require('../Controllers/handlerFactory')

router
    .route('/')
    .get(handlerFactory.getAllData(CLA))
    .post(handlerFactory.addData(CLA))

router
    .route('/:id')
    .delete(handlerFactory.deleteData(CLA))
    .get(handlerFactory.getData(CLA))


module.exports = router