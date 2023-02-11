const mongoose = require('mongoose')
const EMPLOYEE = require('../Models/employeeModel')
const DA = require('../Models/daModel')
const HRA = require('../Models/hraModel')
const TA = require('../Models/taModel')
const CLA = require('../Models/claModel')
const MEDICAL = require('../Models/medicalModel')
const NPS = require('../Models/npsModel')

const schema = new mongoose.Schema({
    empid: {
        type: mongoose.Schema.ObjectId,
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
    total: {
        type: Number
    },
    month: {
        type: Date,
        default: Date.now()
    },
    year: {
        type: Date,
        default: Date.now()
    }
})

const find = async (model, id) => {
    return await model.findById(id)
}

const findbByCity = async (model, city) => {
    console.log(city)
    return await model.findOne({ city: city })
}

schema.pre('save', async function (next) {
    const basic = await find(EMPLOYEE, this.empid)
    const salary = basic.basicsalary
    this.basic = salary * 1
    const city = basic.city

    const dadata = await findbByCity(DA, city)
    const da = dadata.percentage
    this.da = this.basic * da / 100

    const hradata = await findbByCity(HRA, city)
    const hra = hradata.percentage
    this.hra = this.basic * hra / 100

    const tadata = await findbByCity(TA, city)
    const ta = tadata.rupees
    this.ta = ta * 1

    const cladata = await findbByCity(CLA, city)
    const cla = cladata.rupees
    this.cla = cla * 1

    const medicaldata = await findbByCity(MEDICAL, city)
    const medical = medicaldata.rupees
    this.medical = medical * 1

    const npsdata = await findbByCity(NPS, city)
    const nps = npsdata.percentage
    const sum = this.da + this.basic
    const sub = sum * nps / 100
    this.nps = sub

    const total = this.basic + this.da + this.hra + this.ta + this.cla + this.medical + this.nps
    this.total = total

    next()
})

const increamentSchema = mongoose.model('increament', schema)

module.exports = increamentSchema