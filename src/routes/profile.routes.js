// src/routes/profile.routes.js
import express from 'express';
import { createProfile, getProfileById } from '../controllers/profile.controller.js';

const router = express.Router();
router.post('/', createProfile);
router.get('/:id', getProfileById);

export default router;
