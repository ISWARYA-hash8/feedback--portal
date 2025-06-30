const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/announcements", require("./routes/announcementRoutes"));
app.use("/api/resources", require("./routes/resourceRoutes"));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/feedbackportal", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log("Server started on port 5000")))
  .catch((err) => console.log(err));
