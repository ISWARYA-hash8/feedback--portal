const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  message: String,
  resolved: { type: Boolean, default: false }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
