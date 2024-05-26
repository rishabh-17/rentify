const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true,
    },
    location: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    type: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

HomeSchema.methods.like = async function (userId) {
  if (!this.likes.find((id) => id.toString() === userId)) {
    this.likes.push(userId);
    await this.save();
  }
};

HomeSchema.methods.unlike = async function (userId) {
  this.likes = this.likes.filter((id) => id.toString() !== userId);
  await this.save();
};

const Home = mongoose.model("Home", HomeSchema);

module.exports = Home;
