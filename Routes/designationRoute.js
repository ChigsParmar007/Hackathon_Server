const express = require('express')
const router = express.Router()
const Designation = require('../Models/designationModel')
const handlerFactory = require('../Controllers/handlerFactory')

router
  .route('/')
  .get(handlerFactory.getAllData(Designation))
  .post(handlerFactory.addData(Designation))

router
  .route('/:id')
  .delete(handlerFactory.deleteData(Designation))
  .get(handlerFactory.getData(Designation))

// router
//     .route('/')
//     .post(designationController.addDesignation)
//     .get(designationController.getAllDesignation)

// router
//     .route('/:id')
//     .delete(designationController.deleteDesignation)
//     .get(designationController.getDesignation)

module.exports = router