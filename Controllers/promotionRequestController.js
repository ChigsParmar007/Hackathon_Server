const catchAsync = require('../utils/catchAsync')
const APIFeatures = require('./../utils/apiFeatures');
const PROMOTION = require('../Models/promotionRequestModel')

const addData = catchAsync(async (req, res) => {
    const data = await PROMOTION.create(req.body)
    res.status(201).json({
        status: 'Success',
        data
    })
})

const getAllData = catchAsync(async (req, res) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(PROMOTION.find(filter), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
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

const getData = catchAsync(async (req, res) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(PROMOTION.findById(filter), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
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

const deleteData = catchAsync(async (req, res) => {
    const data = await PROMOTION.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: 'Success',
        data
    })
})

const updateDate = catchAsync(async (req, res) => {
    const data = await PROMOTION.findByIdAndUpdate(req.params.id, req.body)
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