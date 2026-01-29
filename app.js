import express from "express";
import mongoose from "mongoose";
import db from "./routes/db.js";
import pastes from "./routes/pastes.js";

const app = express();

app.use(express.json());

app.use("/api/db", db);
app.use("/api/pastes", pastes);


export default app;
