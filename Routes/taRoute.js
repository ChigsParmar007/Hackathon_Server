const express = require('express')
const router = express.Router()
const TA = require('../Models/taModel')
const handlerFactory = require('../Controllers/handlerFactory')

router
  .route('/')
  .get(handlerFactory.getAllData(TA))
  .post(handlerFactory.addData(TA))

router
  .route('/:id')
  .delete(handlerFactory.deleteData(TA))
  .get(handlerFactory.getData(TA))

module.exports = router