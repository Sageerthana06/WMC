import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Route imports
import serviceRoutes from "./routes/serviceRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ─── Middleware ──────────────────────────────────────────────────────────────

// CORS — allow frontend to connect
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Parse JSON bodies (limit raised for base64 images)
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ─── API Routes ─────────────────────────────────────────────────────────────

app.use("/api/services", serviceRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/admin", adminRoutes);

// ─── Health Check ───────────────────────────────────────────────────────────

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "WEC Backend API is running",
    timestamp: new Date().toISOString(),
  });
});

// ─── 404 Handler ────────────────────────────────────────────────────────────

app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});

// ─── Global Error Handler ───────────────────────────────────────────────────

app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

// ─── Start Server ───────────────────────────────────────────────────────────

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 WEC Backend running on http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health\n`);
});
