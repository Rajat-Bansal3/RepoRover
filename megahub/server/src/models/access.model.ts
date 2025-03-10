import mongoose from "mongoose";

const accessSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  }, // Who granted access
  repository: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Repository",
    required: true,
    index: true,
  }, // Which repo
  grantedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  }, // Who can access it
  createdAt: { type: Date, default: Date.now },
});

const access_model = mongoose.model("Access", accessSchema);
export default access_model;
