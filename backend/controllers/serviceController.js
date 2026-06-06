import Service from "../models/Service.js";

// @desc    Get all services
// @route   GET /api/services
// @access  Public
export const getServices = async (req, res) => {
  try {
    const services = await Service.find({}).sort({ createdAt: -1 });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get single service
// @route   GET /api/services/:id
// @access  Public
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Create a service
// @route   POST /api/services
// @access  Admin
export const createService = async (req, res) => {
  try {
    const { title, description, icon, image, featured } = req.body;
    const service = await Service.create({
      title,
      description,
      icon,
      image,
      featured,
    });
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ message: "Invalid data", error: error.message });
  }
};

// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Admin
export const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    const { title, description, icon, image, featured } = req.body;
    service.title = title ?? service.title;
    service.description = description ?? service.description;
    service.icon = icon ?? service.icon;
    service.image = image ?? service.image;
    service.featured = featured ?? service.featured;

    const updated = await service.save();
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Update failed", error: error.message });
  }
};

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Admin
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    await service.deleteOne();
    res.json({ message: "Service removed" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error: error.message });
  }
};
