const Education = require('../Models/empeducationModel')

const addEducation = async (req, res, next) => {
    const data = await Education.create(req.body)
    res.status(201).json({
        status: 'Success',
        data
    })
}

const getAllEducation = async (req, res) => {
    const data = await Education.find()
    res.status(200).json({
        status: 'Success',
        data
    })
}

const deleteEducation = async (req, res, next) => {
    const data = await Education.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: 'Success'
    })
}

const getEducation = async (req, res, next) => {
    const data = await Education.findById(req.params.id)
    res.status(201).json({
        status: 'Success',
        data
    })
}

module.exports = {
    addEducation,
    getAllEducation,
    deleteEducation,
    getEducation
}