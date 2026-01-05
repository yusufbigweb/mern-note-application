import express from "express";
import noteRoutes from './Routes/noteRoute.js'
const app = express();

app.use("/api/notes", noteRoutes)

app.listen(6000, ()=>{
    console.log("Server is running on PORT 6000")
})

