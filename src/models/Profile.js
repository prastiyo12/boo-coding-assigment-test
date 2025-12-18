// src/models/Profile.js
import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  name: String,
  title: String,
  bio: String,
  image: String
}, { timestamps: true });

export default mongoose.model('Profile', ProfileSchema);
