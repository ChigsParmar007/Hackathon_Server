const express = require('express')
const router = express.Router()
const Office = require('../Models/officeModel')
const handlerFactory = require('../Controllers/handlerFactory')

router
  .route('/')
  .get(handlerFactory.getAllData(Office))
  .post(handlerFactory.addData(Office))

router
  .route('/:id')
  .delete(handlerFactory.deleteData(Office))
  .get(handlerFactory.getData(Office))

module.exports = router