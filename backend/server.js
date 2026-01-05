import express from "express";
import noteRoutes from './routes/noteRoute.js'
const app = express();

app.use("/api/notes", noteRoutes)

app.listen(6000, ()=>{
    console.log("Server is running on PORT 6000")
})

// mongodb+srv://thefearfulsecrets_db_user:<db_password>@notesapi.rsll6om.mongodb.net/?appName=notesAPI