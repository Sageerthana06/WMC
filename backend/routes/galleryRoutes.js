import express from "express";
import {
  getGallery,
  getGalleryById,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} from "../controllers/galleryController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.get("/", getGallery);
router.get("/:id", getGalleryById);

// Admin-protected routes
router.post("/", protect, createGalleryItem);
router.put("/:id", protect, updateGalleryItem);
router.delete("/:id", protect, deleteGalleryItem);

export default router;
