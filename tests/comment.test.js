import request from 'supertest';
import app from '../src/app.js';
import { connectDB, disconnectDB } from '../src/config/database.js';

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await disconnectDB();
});

test('create comment and like', async () => {
  const user = await request(app)
    .post('/users')
    .send({ name: 'Alice' });

  const comment = await request(app)
    .post('/comments')
    .send({
      content: 'Nice profile',
      userId: user.body._id
    });

  const like = await request(app)
    .post(`/comments/${comment.body._id}/like`)
    .send({ userId: user.body._id });

  expect(like.body.likes.length).toBe(1);
});
