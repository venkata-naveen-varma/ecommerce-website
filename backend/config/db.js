import mongoose from "mongoose";

const connectDB = async ()=> {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected!");
    }catch(err){
        console.log("MongoDB Connection errorMsg: ", err);
    }
};

export default connectDB;