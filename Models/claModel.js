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

const claSchema = mongoose.model('cla', schema)

module.exports = claSchema