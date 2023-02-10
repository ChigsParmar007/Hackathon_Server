const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    city: {
        type: String,
        required: [true, 'City Name Field is required.'],
        unique: true
    },
    percentage: {
        type: Number,
        required: [true, 'Rupees Field is required.']
    },
})

const npsSchema = mongoose.model('nps', schema)

module.exports = npsSchema