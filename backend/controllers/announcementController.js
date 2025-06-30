const Announcement = require("../models/announcement");

const createAnnouncement = async (req, res) => {
  const { title, content } = req.body;

  try {
    const announcement = await Announcement.create({
      title,
      content,
      createdBy: req.user._id
    });
    res.status(201).json(announcement);
  } catch (err) {
    res.status(500).json({ message: "Error creating announcement", error: err.message });
  }
};

const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().populate("createdBy", "username role");
    res.status(200).json(announcements);
  } catch (err) {
    res.status(500).json({ message: "Error fetching announcements" });
  }
};

module.exports = { createAnnouncement, getAllAnnouncements };
