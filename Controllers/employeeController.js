const Employee = require('../Models/employeeModel')

const addEmployee = async (req, res, next) => {
    const newEmployee = await Employee.create(req.body)
    res.status(statusCode).json({
        status: 'success',
        newEmployee
    })
}