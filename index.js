const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv")
const port = process.env.port || 5000;
const cors = require("cors"); 
const bodyparser = require("body-parser");
const LoginRoute  = require('./Routes/MLogin');

dotenv.config();
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());
app.use(express.json())
app.use(cors());
 
  

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("Database Connected..") })
    .catch((error) => { console.log(error) })


app.use("/api/auth", LoginRoute);

app.listen(port, () => {
    console.log("port no is 5000");
})