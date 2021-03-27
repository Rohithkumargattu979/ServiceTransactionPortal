const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeURL = require('./Routes/route')
const cors = require('cors');
const professionals = require('./Routes/professionals');
let corsOptions = {
  origin: 'http://localhost:4000/'
};


app.disable("x-powered-by");
//config
dotenv.config()

mongoose.connect(process.env.ACCESS,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
},).then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(express.json())
app.use(cors());
app.use('/app',routeURL)
app.use('/professionals',professionals)
app.listen(4000,() => console.log('server is open'))