const mongoose = require('mongoose');

const AnalysisSchema = new mongoose.Schema({
  resumeText: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  matchScore: {
    type: Number,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  strengths: {
    type: [String],
    required: true
  },
  missing: {
    type: [String],
    required: true
  },
  improved_bullet: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Analysis', AnalysisSchema);