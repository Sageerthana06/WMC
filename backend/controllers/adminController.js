import Admin from "../models/Admin.js";
import { generateToken } from "../middleware/auth.js";

// @desc    Register admin (first-time setup only)
// @route   POST /api/admin/register
// @access  Public (only when no admins exist)
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Only allow registration if no admins exist (first-time setup)
    const existingAdmins = await Admin.countDocuments();
    if (existingAdmins > 0) {
      return res.status(403).json({
        message: "Admin already exists. Contact superadmin for new accounts.",
      });
    }

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const admin = await Admin.create({
      name,
      email,
      password,
      role: "superadmin",
    });

    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      token: generateToken(admin._id),
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already registered" });
    }
    res.status(400).json({ message: "Registration failed", error: error.message });
  }
};

// @desc    Login admin
// @route   POST /api/admin/login
// @access  Public
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      token: generateToken(admin._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

// @desc    Get admin profile
// @route   GET /api/admin/profile
// @access  Admin
export const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id).select("-password");
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
