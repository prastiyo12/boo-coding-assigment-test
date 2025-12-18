// src/controllers/comment.controller.js
import Comment from '../models/Comment.js';

export const createComment = async (req, res) => {
  const comment = await Comment.create({
    content: req.body.content,
    author: req.body.userId
  });
  res.status(201).json(comment);
};

export const getComments = async (req, res) => {
  const comments = await Comment.find()
    .populate('author')
    .sort({ createdAt: -1 });

  res.json(comments);
};

export const toggleLike = async (req, res) => {
  const { userId } = req.body;
  const comment = await Comment.findById(req.params.id);

  if (!comment) return res.status(404).json({ message: 'Not found' });

  const index = comment.likes.indexOf(userId);
  if (index === -1) {
    comment.likes.push(userId);
  } else {
    comment.likes.splice(index, 1);
  }

  await comment.save();
  res.json(comment);
};
