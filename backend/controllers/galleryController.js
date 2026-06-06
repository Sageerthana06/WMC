import Gallery from "../models/Gallery.js";

// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
export const getGallery = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = {};
    if (category && category !== "all") {
      if (category === "video") {
        filter.type = "video";
      } else {
        filter.category = category;
      }
    }
    const items = await Gallery.find(filter).sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get single gallery item
// @route   GET /api/gallery/:id
// @access  Public
export const getGalleryById = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Gallery item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Create a gallery item
// @route   POST /api/gallery
// @access  Admin
export const createGalleryItem = async (req, res) => {
  try {
    const { title, description, icon, image, category, type, videoUrl, featured } =
      req.body;
    const item = await Gallery.create({
      title,
      description,
      icon,
      image,
      category,
      type,
      videoUrl,
      featured,
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: "Invalid data", error: error.message });
  }
};

// @desc    Update a gallery item
// @route   PUT /api/gallery/:id
// @access  Admin
export const updateGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Gallery item not found" });
    }

    const fields = [
      "title",
      "description",
      "icon",
      "image",
      "category",
      "type",
      "videoUrl",
      "featured",
    ];
    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        item[field] = req.body[field];
      }
    });

    const updated = await item.save();
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Update failed", error: error.message });
  }
};

// @desc    Delete a gallery item
// @route   DELETE /api/gallery/:id
// @access  Admin
export const deleteGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Gallery item not found" });
    }
    await item.deleteOne();
    res.json({ message: "Gallery item removed" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error: error.message });
  }
};
