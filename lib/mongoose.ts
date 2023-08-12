import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log(`Mongo DB url not found`);
  }
  if (isConnected) return console.log(`Already connected to mongodb`);
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log(`connected to mongo db.`);
  } catch (err) {
    console.log("failed to connect to mongo", err);
  }
};
