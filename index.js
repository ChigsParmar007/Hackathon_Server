const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
const app = require('./app')

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! Shutting down...')
    console.log(err.name, err.message)
    process.exit(1)
})

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then(() => {
    console.log('MongoDB Atlas Connected..')
}).catch((error) => {
    console.log(error)
})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is Running on PORT ${port}`)
})

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! Shutting down...')
    console.log(err.name, err.message)
    server.close(() => {
        process.exit(1)
    })
})
