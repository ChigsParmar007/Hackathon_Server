const addData = model = async (req, res) => {
    const data = await model.create(req.body)
    res.status(201).json({
        status: 'Success',
        data
    })
}

const getAllData = model = async (req, res) => {
    const data = await model.find()
    res.status(200).json({
        status: 'Success',
        data
    })
}

const getData = model = async (req, res) => {
    const data = await model.findById(req.params.id)
    res.status(200).json({
        status: 'Success',
        data
    })
}

const deleteData = model = async (req, res) => {
    const data = await model.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: 'Success',
        data
    })
}

const updateDate = model = async (req, res) => {
    const data = await model.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        status: 'Success',
        data
    })
}

module.exports = {
    addData,
    getData,
    getAllData,
    deleteData,
    updateDate
}