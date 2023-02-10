const express = require('express')
const router = express.Router()
const Medical = require('../Models/medicalModel')
const handlerFactory = require('../Controllers/handlerFactory')

router
  .route('/')
  .get(handlerFactory.getAllData(Medical))
  .post(handlerFactory.addData(Medical))

router
  .route('/:id')
  .delete(handlerFactory.deleteData(Medical))
  .get(handlerFactory.getData(Medical))

module.exports = router