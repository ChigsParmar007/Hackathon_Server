const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    city: {
        type: String,
        required: [true, 'City Name Field is required.'],
        unique: true
    },
    percentage: {
        type: Number,
        required: [true, 'Percentage Field is required.']
    },
})

const hraSchema = mongoose.model('hra', schema, 'hra')

module.exports = hraSchema