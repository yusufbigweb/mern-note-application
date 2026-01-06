import Note from '../models/Note.js'

export async function getAllNote (req, res){
    try{
        const notes = await Note.find()
        res.status(200).json(notes)
    }catch(error){
        console.error("Error in getAllNote Controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export async function CreateNote(req, res){
    try{
        const {title, content} = req.body;
        const note = new Note({title, content})

        const saveNote = await note.save();
        res.status(201).json(saveNote)
    }catch(error){
        console.error("Error in CreateNote Controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export function updateNote(req,res){
    res.status(200).json({message: "Note Update successfully"})
}

export function deleteNote(req, res){
    res.status(200).json({message: "Note Deleted Successfully"})
}