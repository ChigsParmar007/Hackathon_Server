const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'UserName Field is required.']
    },
    password: {
        type: String,
        required: [true, 'Password Field is required.']
    }
})

const adminloginSchema = mongoose.model('admin', schema, 'admin')

module.exports = adminloginSchema