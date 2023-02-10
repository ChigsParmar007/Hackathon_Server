const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    designation: {
        type: String,
        required: [true, 'Designation Field is required.'],
        unique: true
    }
})

const designationSchema = mongoose.model('designation', schema)

module.exports = designationSchema