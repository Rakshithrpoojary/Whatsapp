import mongoose from "mongoose";
export const Connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Database connected");
  } catch (error) {
    console.log("Connection failed", error.message);
  }
};
