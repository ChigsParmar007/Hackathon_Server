const catchAsync = require('../utils/catchAsync')
const APIFeatures = require('./../utils/apiFeatures');
const TRACK = require('../Models/trackRecordModel')

const addData = catchAsync(async (req, res) => {
    const data = await TRACK.create(req.body)
    res.status(201).json({
        status: 'Success',
        data
    })
})

const getAllData = catchAsync(async (req, res) => {
    // let filter = {};
    // if (req.params.tourId) filter = { tour: req.params.tourId };

    // const features = new APIFeatures(TRACK.find(filter), req.query)
    //     .filter()
    //     .sort()
    //     .limitFields()
    //     .paginate();
    // const doc = await features.query;

    const data = await TRACK.find()
    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        data
    });
})

const getData = catchAsync(async (req, res) => {
    // let filter = {};
    // if (req.params.tourId) filter = { tour: req.params.tourId };

    // const features = new APIFeatures(TRACK.findById(filter), req.query)
    //     .filter()
    //     .sort()
    //     .limitFields()
    //     .paginate();
    // const data = await features.query;

    const data = await TRACK.find(req.body)

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        data
    });
})

const deleteData = catchAsync(async (req, res) => {
    const data = await TRACK.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: 'Success',
        data
    })
})

const updateDate = catchAsync(async (req, res) => {
    const data = await TRACK.findByIdAndUpdate(req.params.id, req.body)
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
    updateDate
}