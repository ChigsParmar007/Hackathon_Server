const Office = require('../Models/officeModel')

const addOffice = async (req, res, next) => {
    const data = await Office.create(req.body)
    res.status(201).json({
        status: 'Success',
        data
    })
}

const getAllOffice = async (req, res) => {
    const data = await Office.find()
    res.status(200).json({
        status: 'Success',
        data
    })
}

const deleteOffice = async (req, res, next) => {
    const data = await Office.findByIdAndDelete(req.params.id)
    req.status(200).json({
        status: 'Success',
        data
    })
}

module.exports = {
    addOffice,
    getAllOffice,
    deleteOffice
}