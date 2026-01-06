import express from "express"
import { CreateNote, deleteNote, getAllNote, updateNote } from "../controller/noteController.js";
const router = express.Router();

router.get("/", getAllNote)
router.get("/id", getAllNote)

router.post("/", CreateNote)

router.put("/id", updateNote)

router.delete("/id", deleteNote)


export default router


