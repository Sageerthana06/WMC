import express from "express";
import {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
} from "../controllers/adminController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// Protected routes
router.get("/profile", protect, getAdminProfile);

export default router;
