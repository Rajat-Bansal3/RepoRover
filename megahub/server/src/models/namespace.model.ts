import mongoose from "mongoose";

const namespaceSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  }, // User who owns the namespace
  name: { type: String, required: true }, // Display name
  slug: { type: String, required: true, unique: true, index: true }, // Tiny URL, must be unique
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const nameSpace_model = mongoose.model("Namespace", namespaceSchema);
export default nameSpace_model;
