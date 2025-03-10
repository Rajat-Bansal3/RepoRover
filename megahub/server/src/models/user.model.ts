import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  githubId: { type: String, required: true, unique: true, index: true }, // GitHub OAuth ID
  username: { type: String, required: true, unique: true, index: true },
  email: { type: String, required: true, unique: true, index: true },
  avatarUrl: { type: String },
  githubAccessToken: { type: String, required: true, select: false }, // Store securely (use select:false to prevent exposure)
  createdAt: { type: Date, default: Date.now },
});

const user_model = mongoose.model("User", userSchema);
export default user_model;
