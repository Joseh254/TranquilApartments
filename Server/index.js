import express from 'express';
import { config } from 'dotenv';
import router from './routes/spaces.routes.js';
import routerr from './routes/users.routes.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app=express();
app.use(cors({
    origin:" http://localhost:5173",
    methods:["GET","POST","PATCH","DELETE"],
    credentials:true
}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/spaces", router)
app.use("/api/users/", routerr)

app.listen(7000,()=>{
    console.log("app running on port 7000 ....");
})