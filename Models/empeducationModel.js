const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    empid: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Employee ID is required.'],
        unique: true
    },
    tenthyear: {
        type: Date,
        required: [true, '10th passing year is required.']
    },
    tenthper: {
        type: Number,
        required: [true, '10th Percentage is required.']
    },
    twelthyear: {
        type: Date,
        required: [true, '12th  passing year required.']
    },
    twelthper: {
        type: Number,
        required: [true, '12th Percentage is required.']
    },
    twelthfield: {
        type: String,
        required: [true, '12th Stream is required.']
    },
    graduationyear: {
        type: Date,
        required: [true, 'graduation Year is required.']
    },
    graduationper: {
        type: Number,
        required: [true, 'graduation Percentage is required.']
    },
    graduationfield: {
        type: String,
        required: [true, 'Graduation Stream is required.']
    },
    masteryear: {
        type: Date,
        default: null
    },
    mastersper: {
        type: Number,
        default: null
    },
    mastersfield: {
        type: String,
        default: 'Not Attempt'
    },
    ccc: {
        type: String,
        required: [true, 'CCC selection is required.']
    },
    isvarified: {
        type: Boolean,
        default: false
    }
})

const educationSchema = mongoose.model('education', schema)

module.exports = educationSchema