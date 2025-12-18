// src/controllers/user.controller.js
import User from '../models/User.js';

export const createUser = async (req, res) => {
  const user = await User.create({ name: req.body.name });
  res.status(201).json(user);
};
