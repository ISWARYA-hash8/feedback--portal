const express = require("express");
const router = express.Router();
const { createAnnouncement, getAllAnnouncements } = require("../controllers/announcementController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/", protect, adminOnly, createAnnouncement);
router.get("/", protect, getAllAnnouncements);

module.exports = router;
