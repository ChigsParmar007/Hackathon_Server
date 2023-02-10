const express = require('express')
const router = express.Router()
const handlerFactory = require('../Controllers/handlerFactory')

router
    .route('/')
    .get(handlerFactory.getAllData)
    .post(handlerFactory.addData)

router
    .route('/:id')
    .delete(handlerFactory.deleteData)
    .get(handlerFactory.getData)

module.exports = router