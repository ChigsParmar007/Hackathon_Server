const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cityName: {
        type: String,
        required: [true, 'City Name Field is required.'],
        unique: true
    }
})

const citySchema = mongoose.model('city', schema)

module.exports = citySchema