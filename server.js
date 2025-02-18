import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import corsOptions from "./config/corsOptions.js";
import { connectToDB } from "./config/db.js";
import homeRoute from "./routes/homeRoute.js";

dotenv.config();
const app = express();

// middlewares
app.use(cors(corsOptions));
app.use(express.json());

// routes
app.use("/", homeRoute);

const PORT = process.env.PORT || 5173;
// connect to the database and then listen for connections
connectToDB()
   .then(() => {
      app.listen(PORT, () => {
         console.log(`Listening at http://localhost:${PORT}`);
      });
   })
   .catch((error) => {
      console.log(error);
   });
