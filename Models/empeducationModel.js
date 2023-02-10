const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    empid: {
        type: String,
        required: [true, 'Employee ID is required.'],
        unique: true
    },
    tenthbool: {
        type: Boolean,
        required: [true, '10th is required.'],
        unique: true
    },
    tenthper: {
        type: String,
        required: [true, '10th Percentage is required.'],
        unique: true
    },
    twelthbool: {
        type: Boolean,
        required: [true, '12th is required.'],
        unique: true
    },
    twelthper: {
        type: String,
        required: [true, '12th Percentage is required.'],
        unique: true
    },
    graduation: {
        type: String,
        required: [true, 'Graduation is required.'],
        unique: true
    },
    graduationper: {
        type: String,
        required: [true, 'graduation Percentage is required.'],
        unique: true
    },
    masters: {
        type: String,
        required: [true, 'Master is required.'],
        unique: true
    },
    mastersper: {
        type: String,
        required: [true, 'Masters Percentage is required.'],
        unique: true
    },
    hindi: {
        type: String,
        required: [true, 'This Field ID is required.'],
        unique: true
    },
    english: {
        type: String,
        required: [true, 'This field is required.'],
        unique: true
    },
    ccc: {
        type: String,
        required: [true, 'This field is required.'],
        unique: true
    },
})

const educationSchema = mongoose.model('education', schema)

module.exports = educationSchema