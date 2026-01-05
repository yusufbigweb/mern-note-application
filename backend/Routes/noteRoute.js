import express from "express"
import { CreateNote, deleteNote, getAllNote, updateNote } from "../Controller/noteController";
const router = express.Router();

router.get("/", getAllNote)

router.post("/api/notes/:id", CreateNote)

router.put("/api/notes/:id", updateNote)

router.delete("/api/notes", deleteNote)


// app.get("/api/notes", (req, res)=>{
//     res.status(200).send("you got 56 notes")
// })
// app.post("/api/notes", (req, res)=>{
//     res.status(201).json({message:"Note create successfully!"})
// })
// app.put("/api/notes:id", (req, res)=>{
//     res.status(200).json({message:"Note Update Notes"})
// })
// app.delete("/api/notes:id", (req, res)=>{
//     res.status(200).json({message: "Note deleted succesfully"})
// })


export default router
