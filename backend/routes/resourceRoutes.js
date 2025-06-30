const express = require("express");
const router = express.Router();
const { uploadResource, getAllResources } = require("../controllers/resourceController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/", protect, adminOnly, uploadResource);
router.get("/", protect, getAllResources);

module.exports = router;
