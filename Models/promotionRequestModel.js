const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    empid: {
        // type: mongoose.Schema.ObjectId,
        type: String,
        required: [true, 'Employee Id Field is required.']
    },
    ccc: {
        type: String,
        default: false
    },
    hindi: {
        type: String,
        default: false
    },
    classexam: {
        type: String,
        default: false
    },
    maritpass: {
        type: String,
        default: false
    },
    training: {
        type: String
    },
    accuracy: {
        type: Number
    },
    status: {
        type: String,
        enum: ['Pending', 'Accepted', "Rejected"],
        default: 'Pending'
    },
    createdat: {
        type: Date,
        default: Date.now()
    },
    updatedat: {
        type: Date,
        default: Date.now()
    }
})

const promotionSchema = mongoose.model('promotion', schema, 'promotion')

module.exports = promotionSchema