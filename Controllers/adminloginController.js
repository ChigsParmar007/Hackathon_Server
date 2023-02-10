const Admin = require('../Models/adminloginModel')

const addAdmin = async (req, res, next) => {
    console.log(req.body)
    const data = new Admin(req.body)
    res.status(201).json({
        status: 'Success',
        data
    })
}

const login = async (req, res, next) => {
    const { email, password } = req.body

    const data = await Admin.findOne({ email }).select('+password')

    if (!data) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Username or password are wrong'
        })
    }

    res.status(200).json({
        status: 'Success',
        data
    })
}

module.exports = {
    login,
    addAdmin
}