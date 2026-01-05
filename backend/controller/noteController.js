export function getAllNote (req, res){
    res.status(200).send("you just fetching the notes")
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