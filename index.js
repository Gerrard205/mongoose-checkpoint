import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();



 const connectdb = mongoose.connect(process.env.MONGODB_URL)

 console.log(connectdb)
