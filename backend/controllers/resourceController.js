const Resource = require("../models/resource");

const uploadResource = async (req, res) => {
  const { title, link, description } = req.body;

  try {
    const resource = await Resource.create({
      title,
      link,
      description,
      uploadedBy: req.user._id
    });
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ message: "Error uploading resource", error: err.message });
  }
};

const getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find().populate("uploadedBy", "username role");
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: "Error fetching resources" });
  }
};

module.exports = { uploadResource, getAllResources };
