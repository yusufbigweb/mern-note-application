import express from "express"
import { CreateNote, deleteNote, getAllNote, updateNote } from "../controller/noteController.js";
const router = express.Router();

router.get("/", getAllNote)

router.post("/api/notes/:id", CreateNote)

router.put("/api/notes/:id", updateNote)

router.delete("/api/notes", deleteNote)


export default router


