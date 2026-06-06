import express from "express";
import {
  getMessages,
  createMessage,
  markMessageRead,
  deleteMessage,
} from "../controllers/messageController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Public — submit contact form
router.post("/", createMessage);

// Admin-protected routes
router.get("/", protect, getMessages);
router.put("/:id/read", protect, markMessageRead);
router.delete("/:id", protect, deleteMessage);

export default router;
