console.log("hello"); /** @format */

import express from "express";
import AppRouter from "./routers/router.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = Number(process.env.PORT);

app.use(express.json());
app.use("/", AppRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the world");
});

mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
