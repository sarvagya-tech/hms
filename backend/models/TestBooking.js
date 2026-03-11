const mongoose = require('mongoose');

const TestBookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  testName: {
    type: String,
    required: [true, 'Please add a test name'],
  },
  collectionType: {
    type: String,
    enum: ['hospital', 'home'],
    default: 'home',
  },
  status: {
    type: String,
    enum: ['pending', 'sample_collected', 'processing', 'report_ready'],
    default: 'pending',
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('TestBooking', TestBookingSchema);
