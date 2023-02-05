const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    mname: {
        type: String,
        required: true,
        unique: true,
    },
    minister: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    contact: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }, 
},
    { timestamps: true }
);

module.exports = mongoose.model("Minister",UserSchema);