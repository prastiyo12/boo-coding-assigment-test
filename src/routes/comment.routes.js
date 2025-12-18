// src/routes/comment.routes.js
import express from 'express';
import { createComment, getComments, toggleLike } from '../controllers/comment.controller.js';

const router = express.Router();
router.post('/', createComment);
router.get('/', getComments);
router.post('/:id/like', toggleLike);

export default router;
