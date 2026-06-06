import Message from "../models/Message.js";

// @desc    Get all messages
// @route   GET /api/messages
// @access  Admin
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({}).sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Submit a contact message (from frontend contact form)
// @route   POST /api/messages
// @access  Public
export const createMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message, image } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Name, email, and message are required" });
    }

    const msg = await Message.create({
      name,
      email,
      phone,
      subject,
      message,
      image,
    });
    res.status(201).json(msg);
  } catch (error) {
    res.status(400).json({ message: "Invalid data", error: error.message });
  }
};

// @desc    Mark message as read
// @route   PUT /api/messages/:id/read
// @access  Admin
export const markMessageRead = async (req, res) => {
  try {
    const msg = await Message.findById(req.params.id);
    if (!msg) {
      return res.status(404).json({ message: "Message not found" });
    }
    msg.read = true;
    const updated = await msg.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Delete a message
// @route   DELETE /api/messages/:id
// @access  Admin
export const deleteMessage = async (req, res) => {
  try {
    const msg = await Message.findById(req.params.id);
    if (!msg) {
      return res.status(404).json({ message: "Message not found" });
    }
    await msg.deleteOne();
    res.json({ message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error: error.message });
  }
};
