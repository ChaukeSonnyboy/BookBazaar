import { app } from "./app.js";
import connectDB from "./db/dbconn.js";

import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB connection error: ${error}`);
  });
