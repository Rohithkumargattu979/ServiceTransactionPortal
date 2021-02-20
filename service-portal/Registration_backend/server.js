const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeURL = require('./Routes/route')

dotenv.config()

mongoose.connect(process.env.ACCESS, () => console.log('database connected') )


app.listen(4000,() => console.log('server is open'))