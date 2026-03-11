const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Pending', 'Ready'],
    default: 'Ready',
  },
  provider: {
    type: String,
    required: [true, 'Please add a provider'],
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
  },
  highlights: {
    type: String,
  },
  idVisible: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Report', ReportSchema);
