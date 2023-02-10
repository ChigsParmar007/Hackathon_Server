const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    officename: {
        type: String,
        required: [true, 'City Name Field is required.']
    },
    ministername: {
        type: String,
        required: [true, 'Minister name field is required.']
    },
    cityname: {
        type: String,
        required: [true, 'City Name field is required.']
    }
})

const officeSchema = mongoose.model('office', schema)

module.exports = officeSchema