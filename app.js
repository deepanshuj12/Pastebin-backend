import express from "express";
import mongoose from "mongoose";
import cors from "cors"; 
import healthz from "./routes/healthz.js";
import pastes from "./routes/pastes.js";

const app = express();

app.use(cors({
  origin: process.env.PUBLIC_BASE_URL
}));

app.use(express.json());

app.use("/api/healthz", healthz);
app.use("/api/pastes", pastes);

export default app;
