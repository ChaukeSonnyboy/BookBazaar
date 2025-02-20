import {mongoose} from 'mongoose'
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionString = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `Database connected. DB Host:${connectionString.connection.host}`
    );
  } catch (error) {
    console.log(`Error connecting to the database, ${error}`);
    process.exit(1);
  }
};


export default connectDB;