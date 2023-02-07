const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'City Name Field is required.']
    }
})

const citySchema = mongoose.model('city', schema)

module.exports = citySchema