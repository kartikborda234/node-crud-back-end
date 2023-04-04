import express from 'express'
import mongoose from "mongoose";
import Routes from "./routes/route.js"
import cors from 'cors';
import bodyParser from 'body-parser'

const uri="mongodb://localhost:27017/node-crud"

mongoose.connect(uri).then(()=>{
    console.log("mongodb connected")
}).catch(()=>{
    console.log("mongodb error")
})
const app=express();
app.use(cors());
// app.use(express.json());
app.use(bodyParser.json({extended:true}))
app.use('/',Routes);


const PORT="7000";


app.listen(PORT,()=>console.log(`server is running successfully on port ${PORT}`))