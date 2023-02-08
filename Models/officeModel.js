const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    officeName: {
        type: String,
        required: [true, 'City Name Field is required.'],
        unique: true
    },
    ministerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'minister',
      required: [true, 'Minister Id field is required.']
    },
    cityId: {
        type: mongoose.Schema.ObjectId,
        ref: 'cities',
        required: [true, 'City id field is required.']
    }
})

const officeSchema = mongoose.model('office', schema)

module.exports = officeSchema