const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    city: {
        type: String,
        required: [true, 'City Name Field is required.']
    },
    rupees: {
        type: Number,
        required: [true, 'Rupees Field is required.']
    },
})

const taSchema = mongoose.model('ta', schema)

module.exports = taSchema