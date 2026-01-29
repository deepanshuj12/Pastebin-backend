import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

let conn = null;

export default async function handler(req, res) {
  if (!conn) {
    try {
      conn = await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected");
    } catch (err) {
      console.error("Mongo error:", err.message);
      return res.status(500).json({ error: "Database connection failed" });
    }
  }

  // Pass request to Express app
  return app(req, res);
}
