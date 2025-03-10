import mongoose from "mongoose";

const repoSchema = new mongoose.Schema({
  githubRepoId: { type: String, required: true, unique: true, index: true }, // GitHub repository ID
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  }, // Original owner
  name: { type: String, required: true }, // Repository name
  fullName: { type: String, required: true, unique: true, index: true }, // "username/repo-name"
  description: { type: String },
  url: { type: String, required: true },
  private: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const repo_model = mongoose.model("Repository", repoSchema);
export default repo_model;
