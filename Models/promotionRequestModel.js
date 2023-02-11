const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    empid: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'Employee Id Field is required.']
    },
    ccc: {
        type: Boolean,
        required: [true, 'CCC Field is required.'],
        default: false
    },
    hindi: {
        type: Boolean,
        required: [true, 'Hindi Field is required.'],
        default: false
    },
    classexam: {
        type: Boolean,
        required: [true, 'Class Exam Field is required.'],
        default: false
    },
    maritpass: {
        type: Boolean,
        required: [true, 'Marit Pass Field is required.'],
        default: false
    },
    accuracy: {
        type: Number
    },
})

const promotionSchema = mongoose.model('promotion', schema, 'promotion')

module.exports = promotionSchema