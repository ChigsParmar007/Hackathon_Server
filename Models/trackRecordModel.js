const mongoose = require('mongoose')
// const EMPLOYEE = require('../Models/employeeModel')
// const DA = require('../Models/daModel')
// const HRA = require('../Models/hraModel')
// const TA = require('../Models/taModel')
// const CLA = require('../Models/claModel')
// const MEDICAL = require('../Models/medicalModel')
// const NPS = require('../Models/npsModel')

const schema = new mongoose.Schema({
    empid: {
        type: mongoose.Schema.ObjectId,
        ref: 'Employee',
        required: [true, 'Employee ID Field is required.'],
        // unique: true
    },
    basic: {
        type: Number
    },
    da: {
        type: Number
    },
    hra: {
        type: Number
    },
    ta: {
        type: Number
    },
    cla: {
        type: Number
    },
    medical: {
        type: Number
    },
    nps: {
        type: Number
    },
    year: {
        type: Date,
        default: Date.now()
    }
})

const trackRecordSchema = mongoose.model('trackRecord', schema)

module.exports = trackRecordSchema