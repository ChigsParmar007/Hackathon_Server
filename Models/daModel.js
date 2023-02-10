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

const daSchema = mongoose.model('da', schema, 'da')

module.exports = daSchema