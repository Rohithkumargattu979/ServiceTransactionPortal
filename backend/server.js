import express from "express";
import mongoose from "mongoose";
import Cors from "Cors";
//App config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = "mongodb+srv://admin:gRhx4cIL3GMyGmUp@cluster0.ukfvq.mongodb.net/portaldb?retryWrites=true&w=majority"
//Middlewares
app.use(express.json());
app.use(Cors());


//DB config
mongoose.connect(connection_url,{
    useNewUrlParser :true,
  
});


//API Endpoints
app.get("/",(req,res) => res.status(200).send("Hi there!!")) ;

//Listener
app.listen(port,()=>console.log('listening on local host: ${port}'));