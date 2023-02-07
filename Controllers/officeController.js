const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    officeName: {
        type: String,
        required: [true, 'Office Name Field is required.']
    },
    ministerId: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Minister ID Field is required.']
    },
    city: {
        type: mongoose.schema.ObjectId,
        required: [true, 'City Field is required.']
    }
})

const employeeSchema = mongoose.model('employee', schema)

module.exports = employeeSchema