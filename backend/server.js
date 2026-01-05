import express from "express";
import noteRoutes from './routes/noteRoute.js'
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';


dotenv.config()

const PORT = process.env.PORT || 5001;

const app = express();

connectDB()

app.use("/api/notes", noteRoutes)

app.listen(PORT, ()=>{
    console.log("Server is running on PORT:", PORT)
})

