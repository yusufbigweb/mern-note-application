import Note from '../models/Note.js'


// Api showing in this function
export async function getAllNote (_, res){
    try{
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes)
    }catch(error){
        console.error("Error in getAllNote Controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}
//  Create API Using this function 
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
// Single API Item Viwe Using this function
export async function getNoteById(req, res){
    try{
        const note = await Note.findById(req.params.id);
        if(!note) return  res.status(404).json({message: "Note not found"});
        res.json(note)
        
    }catch(error){
        console.error("Error in getNoteById Controller", error)
        res.status(500).json({message: "Internal server error"})

    }
}

// API Update Using this function
export async function updateNote(req,res){
    
    try{
    const {title, content} = req.body;
    const updatedNote =  await Note.findByIdAndUpdate(
        req.params.id,
        {title, content},
        {
            new: true,
        }
    );

    if(!updatedNote) return res.status(404).json({message: "Note not found"})

        res.status(200).json(updatedNote)
        
    }catch(error){
        console.error("Error in CreateNote UpdateNote", error)
        res.status(500).json({message: "Internal server error"})
    }
}

// Delete API Using this function
export async function deleteNote(req, res){
        try{
            const deletedNote = await Note.findByIdAndDelete(req.params.id)
            if(!deleteNote) return res.status(404).json({message:"Note not found"})
            res.status(200).json({message: "Note deleted sucessfully"})
        }catch(error){
            console.error("Error in CreateNote deleteNote", error)
            res.status(500).json({message: "Internal server error"})
        }
}                                                         