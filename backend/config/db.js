import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb conneted successfully")
    }catch(error){
        console.log("Connection are Faild" + error)
        process.exit(1)
    }
}


// notesAPI

