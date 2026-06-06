import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Gallery title is required"],
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "box",
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    type: {
      type: String,
      enum: ["image", "video"],
      default: "image",
    },
    videoUrl: {
      type: String,
      default: "",
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model("Gallery", gallerySchema);
export default Gallery;
