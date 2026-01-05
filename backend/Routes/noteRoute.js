import express from "express"
const router = express.Router();

router.get("/", (res, req)=>{
    res.status(200).send("you just fetching the notes")
})




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
