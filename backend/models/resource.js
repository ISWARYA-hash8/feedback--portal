const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  description: String,
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Resource", resourceSchema);
