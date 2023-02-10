const express = require('express')
const router = express.Router()
const DA = require('../Models/daModel')
const handlerFactory = require('../Controllers/handlerFactory')

router
  .route('/')
  .get(handlerFactory.getAllData(DA))
  .post(handlerFactory.addData(DA))

router
  .route('/:id')
  .delete(handlerFactory.deleteData(DA))
  .get(handlerFactory.getData(DA))

module.exports = router