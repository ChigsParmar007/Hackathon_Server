const Designation = require('../Models/designationModel')

const addDesignation = async (req, res, next) => {
    const data = await Designation.create(req.body)
    res.status(201).json({
        status: 'Success',
        data
    })
}

const getAllDesignation = async (req, res) => {
    const data = await Designation.find()
    res.status(200).json({
        status: 'Success',
        data
    })
}

const deleteDesignation = async (req, res, next) => {
    const data = await Designation.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: 'Success',
        data
    })
}

module.exports = {
    addDesignation,
    getAllDesignation,
    deleteDesignation
}