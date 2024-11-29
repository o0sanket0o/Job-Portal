import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    }catch(err){
        console.log("Error", err);
    }
}
export default connectDB;