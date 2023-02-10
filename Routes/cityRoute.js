const express = require('express')
const router = express.Router()
const cityController = require('../Controllers/cityController')
const handlerFactory = require('../Controllers/handlerFactory')

router
  .route('/')
  .get()

router
  .route('/')
  .post(cityController.addCity)
  .get(cityController.getAllCity)

router
  .route('/:id')
  .delete(cityController.deleteCity)
  .get(cityController.getCity)

module.exports = router