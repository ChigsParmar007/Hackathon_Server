const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    city: {
        type: String,
        required: [true, 'City Name Field is required.'],
        unique: true
    },
    rupees: {
        type: Number,
        required: [true, 'Rupees Field is required.']
    },
})

const medicalSchema = mongoose.model('medical', schema, 'medical')

module.exports = medicalSchema