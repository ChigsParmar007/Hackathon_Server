const express = require('express')
const router = express.Router()
const officeController = require('../Controllers/officeController')

router
  .route('/')
  .post(officeController.addOffice)
  .get(officeController.getAllOffice)

router
  .route('/:id')
  .get(officeController.deleteOffice)

module.exports = router