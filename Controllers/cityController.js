const City = require('../Models/cityModel')

const addCity = async (req, res, next) => {
    const data = await City.create(req.body)
    res.status(201).json({
        status: 'Success',
        data
    })
}

const getAllCity = async (req, res) => {
    const data = await City.find()
    res.status(200).json({
        status: 'Success',
        data
    })
}

const deleteCity = async (req, res, next) => {
    console.log(req.params.id)
    const data = await City.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: 'Success'
    })
}

const getCity = async (req, res, next) => {
    const data = await City.findById(req.params.id)
    res.status(201).json({
        status: 'Success',
        data
    })
}

module.exports = {
    addCity,
    getAllCity,
    deleteCity,
    getCity
}