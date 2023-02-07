const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    employeeName: {
        type: String,
        required: [true, 'Employee Name Field is required.']
    },
    ministerID: {
        type: mongoose.Schema.ObjectId,
        ref: 'Minister',
        required: [true, 'Ministry Object ID Field is required.']
    },
    officeID: {
        type: mongoose.Schema.ObjectId,
        ref: 'Office',
        required: [true, 'Ministry Object ID Field is required.']
    },
    gender: {
        type: String,
        required: [true, 'Gender Field is required.']
    },
    email: {
        type: String,
        required: [true, 'Email Field is required.']
    },
    phone: {
        type: String,
        required: [true, 'Phone Field is required.']
    },
    addressLine1: {
        type: String,
        required: [true, 'Address Line 1 Field is required.']
    },
    addressLine2: {
        type: String,
        required: [true, 'Address Line 2 Field is required.']
    },
    city: {
        type: String,
        required: [true, 'City Field is required.']
    },
    postalCode: {
        type: String,
        required: [true, 'Postal Code Field is required.']
    },
    dateOfJoining: {
        type: Date,
        required: [true, 'Date Of Joining Field is required.']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const employeeSchema = mongoose.model('employee', schema)

module.exports = employeeSchema