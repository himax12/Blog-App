const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  markdown: {
    required: true,
    type: String,
  },
  createdAt: {
    required: true,
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Article", articleSchema);
