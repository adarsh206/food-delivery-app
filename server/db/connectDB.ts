// mongopassword = "7AdYbr9Rbsz2f5Q4"
// mongouser = "addy2061998"
// mongodb+srv://addy2061998:<db_password>@cluster0.5v4fqu7.mongodb.net/

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('MongoDB Connected.');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;