import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  }, // Playlist owner
  name: { type: String, required: true }, // Playlist name
  slug: { type: String, required: true, unique: true, index: true }, // Unique slug for sharing
  description: { type: String },
  repositories: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Repository", index: true },
  ], // Repos added to playlist
  createdAt: { type: Date, default: Date.now },
});

const playlist_model = mongoose.model("Playlist", playlistSchema);
export default playlist_model;
