const catchAsync = require('../utils/catchAsync')
const EMPLOYEE = require('../Models/employeeModel')

const addData = model => catchAsync(async (req, res) => {
    const data = await model.create(req.body)
    res.status(201).json({
        status: 'Success',
        data
    })
})

const monthlySalary = async (req, res) => {
    const data = await EMPLOYEE.find()
    res.status(200).json({
        status: 'Success',
        data
    })
}

const getAllData = model => catchAsync(async (req, res) => {
    const data = await model.find()
    res.status(200).json({
        status: 'Success',
        data
    })
})

const getData = model => catchAsync(async (req, res) => {
    const data = await model.findById(req.params.id)
    res.status(200).json({
        status: 'Success',
        data
    })
})

const deleteData = model => catchAsync(async (req, res) => {
    const data = await model.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: 'Success',
        data
    })
})

const updateDate = model => catchAsync(async (req, res) => {
    const data = await model.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        status: 'Success',
        data
    })
})

module.exports = {
    addData,
    getData,
    getAllData,
    deleteData,
    updateDate,
    monthlySalary
}