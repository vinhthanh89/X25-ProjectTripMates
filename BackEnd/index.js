import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToDb from "./database/connectToDb.js";
import router from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(
  cors({
    // origin : "*"
    origin: [
      "https://x25-projecttripmates.onrender.com",
      "http://localhost:5173",
    ],
  })
);
app.use(router);

app.listen(PORT, () => {
  console.log(`App is running in http://localhost:${PORT}`);
  connectToDb();
});
