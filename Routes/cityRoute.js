const express = require('express')
const router = express.Router()
const City = require('../Models/cityModel')
const handlerFactory = require('../Controllers/handlerFactory')

router
  .route('/')
  .get(handlerFactory.getAllData(City))
  .post(handlerFactory.addData(City))

router
  .route('/:id')
  .delete(handlerFactory.deleteData(City))
  .get(handlerFactory.getData(City))

module.exports = router