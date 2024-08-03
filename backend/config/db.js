import mongoose from "mongoose"

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Seemi:l07zfOPFWQEbQAat@cluster0.ihyhgkh.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}