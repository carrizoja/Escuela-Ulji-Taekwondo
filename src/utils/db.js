import mongoose from "mongoose"
require('dotenv').config();

const source = process.env.MONGO

const connect = async () => {
  try {
    await mongoose.connect(source)
  } catch (error) {
  
   throw new Error("Connection failed!") 
  }
}

export default connect