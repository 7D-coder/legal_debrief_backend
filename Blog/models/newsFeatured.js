const mongoose = require("mongoose");
const Post = require("./blogPost");
const featuredpostSchema = mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Post,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FeaturedPost", featuredpostSchema);
