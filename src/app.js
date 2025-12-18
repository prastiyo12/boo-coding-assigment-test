// src/app.js
import express from 'express';
import profileRoutes from './routes/profile.routes.js';
import userRoutes from './routes/user.routes.js';
import commentRoutes from './routes/comment.routes.js';

const app = express();
app.use(express.json());

app.use('/profiles', profileRoutes);
app.use('/users', userRoutes);
app.use('/comments', commentRoutes);

export default app;
