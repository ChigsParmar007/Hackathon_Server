const catchAsync = require('../utils/catchAsync')
const EMPLOYEE = require('../Models/employeeModel')
const INCREMENT = require('../Models/increamentModel')
const APIFeatures = require('./../utils/apiFeatures');

const addData = (model) => catchAsync(async (req, res) => {
    const data = await model.create(req.body)
    res.status(201).json({
        status: 'Success',
        data
    })
})

const monthlySalary = async (req, res) => {
    const data = await EMPLOYEE.find()
    data.map(async function (emp) {
        await INCREMENT.create({ empid: emp._id })
    })
    res.status(200).json({
        status: 'Success'
    })
}

// const getAllData = model => catchAsync(async (req, res) => {
//     const data = await model.find()

//     res.status(200).json({
//         status: 'Success',
//         data
//     })
// })


const getAllData = model => catchAsync(async (req, res) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(model.find(filter), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    // const doc = await features.query.explain();
    const doc = await features.query;

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
            data: doc
        }
    });
})



// const getData = model => catchAsync(async (req, res) => {
//     const data = await model.findById(req.params.id)
//     res.status(200).json({
//         status: 'Success',
//         data
//     })
// })


const getData = model => catchAsync(async (req, res) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(model.findById(filter), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    // const doc = await features.query.explain();
    const doc = await features.query;

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
            data: doc
        }
    });
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