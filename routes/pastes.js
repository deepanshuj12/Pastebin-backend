import express from "express";
import Paste from "../models/Paste.js";
import { now } from "../time.js";

const router = express.Router();


router.post("/", async (req, res) => {
  const { content, ttl_seconds, max_views } = req.body;

  if (!content || typeof content !== "string" || !content.trim()) {
    return res.status(400).json({ error: "Invalid content" });
  }

  if (ttl_seconds !== undefined && (!Number.isInteger(ttl_seconds) || ttl_seconds < 1)) {
    return res.status(400).json({ error: "Invalid ttl_seconds" });
  }

  if (max_views !== undefined && (!Number.isInteger(max_views) || max_views < 1)) {
    return res.status(400).json({ error: "Invalid max_views" });
  }

  const createdAt = now(req);
  const expiresAt = ttl_seconds
    ? new Date(createdAt.getTime() + ttl_seconds * 1000)
    : null;

  const paste = await Paste.create({
    content,
    expiresAt,
    remainingViews: max_views ?? null
  });

  res.status(201).json({
    id: paste._id.toString(),
    url: `${process.env.PUBLIC_BASE_URL}/p/${paste._id}`
  });
});



router.get("/:id", async (req, res) => {
  const currentTime = now(req);

  const paste = await Paste.findById(req.params.id);
  if (!paste) {
    return res.status(404).json({ error: "Not found" });
  }

  if (paste.expiresAt && currentTime > paste.expiresAt) {
    return res.status(404).json({ error: "Expired" });
  }

  if (paste.remainingViews !== null && paste.remainingViews <= 0) {
    return res.status(404).json({ error: "View limit exceeded" });
  }

  if (paste.remainingViews !== null) {
    paste.remainingViews -= 1;
    await paste.save();
  }

  res.json({
    content: paste.content,
    remaining_views: paste.remainingViews,
    expires_at: paste.expiresAt
  });
});

export default router;
