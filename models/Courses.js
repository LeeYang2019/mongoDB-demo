const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

module.exports = Course = mongoose.model('Courses', courseSchema);
