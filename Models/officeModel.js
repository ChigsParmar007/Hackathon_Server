const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    officename: {
        type: String,
        required: [true, 'City Name Field is required.'],
        unique: true
    },
    ministername: {
        type: String,
        ref: 'minister',
        required: [true, 'Minister name field is required.']
    },
    cityname: {
        type: String,
        ref: 'cities',
        required: [true, 'City Name field is required.']
    }
})

const officeSchema = mongoose.model('office', schema)

module.exports = officeSchema