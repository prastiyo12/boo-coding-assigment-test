// src/controllers/profile.controller.js
import Profile from '../models/Profile.js';

export const createProfile = async (req, res) => {
  const profile = await Profile.create({
    ...req.body,
    image: 'https://placehold.co/300x300'
  });
  res.status(201).json(profile);
};

export const getProfileById = async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) return res.status(404).json({ message: 'Profile not found' });
  res.json(profile);
};
