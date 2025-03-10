import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  shortCode: { type: String, required: true, unique: true, index: true }, // e.g., "abc123"
  originalUrl: { type: String, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  }, // Who created it
  createdAt: { type: Date, default: Date.now },
});

const url_model = mongoose.model("URL", urlSchema);
export default url_model;
