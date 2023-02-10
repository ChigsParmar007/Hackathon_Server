const mongoose = require('mongoose')
const validator = require('validator')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')

const schema = new mongoose.Schema({
    employeename: {
        type: String,
        required: [true, 'Employee Name Field is required.']
    },
    ministername: {
        type: String,
        ref: 'Minister',
        required: [true, 'Ministry Name Field is required.']
    },
    officename: {
        type: String,
        ref: 'Office',
        required: [true, 'Ministry Name Field is required.']
    },
    gender: {
        type: String,
        required: [true, 'Gender Field is required.']
    },
    email: {
        type: String,
        required: [true, 'Email field is required.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Provide a valid Email']
    },
    password: {
        type: String,
        required: [true, 'Password field is required.'],
        minlength: 8,
        select: false
    },
    passwordconfirm: {
        type: String,
        required: [true, 'Confirm Password filed is required'],
        validate: {
            // This only works on CREATE and SAVE!!!
            validator: function (el) {
                return el === this.password;
            },
            message: 'Passwords and ConfirmPassword are not same.'
        }
    },
    phone: {
        type: String,
        required: [true, 'Phone Field is required.']
    },
    addressline1: {
        type: String,
        required: [true, 'Address Line 1 Field is required.']
    },
    addressline2: {
        type: String,
        required: [true, 'Address Line 2 Field is required.']
    },
    city: {
        type: String,
        required: [true, 'City Field is required.']
    },
    postalcode: {
        type: String,
        required: [true, 'Postal Code Field is required.']
    },
    dateofjoining: {
        type: Date,
        required: [true, 'Date Of Joining Field is required.']
    },
    createdat: {
        type: Date,
        default: Date.now()
    }
})

schema.pre('save', async function (next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next()

    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12)

    // Delete passwordConfirm field
    this.passwordConfirm = undefined
    next()
})

schema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next()

    this.passwordChangedAt = Date.now() - 1000
    next()
})

schema.pre(/^find/, function (next) {
    // this points to the current query
    this.find({ active: { $ne: false } })
    next()
})

schema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

schema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        )

        return JWTTimestamp < changedTimestamp
    }

    // False means NOT changed
    return false
}

schema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex')

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex')

    console.log({ resetToken }, this.passwordResetToken)

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000

    return resetToken
}

const employeeSchema = mongoose.model('employee', schema)

module.exports = employeeSchema