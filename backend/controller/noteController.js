import Note from '../models/Note.js'

export async function getAllNote (req, res){
    try{
        const notes = await Note.findd()
        res.status(200).json(notes)
    }catch(error){
        console.error("Error in getAllNote Controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export function CreateNote(req, res){
    res.status(201).json({message: "Note Created successfully"})
}

export function updateNote(req,res){
    res.status(200).json({message: "Note Update successfully"})
}

export function deleteNote(req, res){
    res.status(200).json({message: "Note Deleted Successfully"})
}