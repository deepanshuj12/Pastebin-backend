import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    ok: mongoose.connection.readyState === 1
  });
});

export default router;
