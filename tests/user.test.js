import request from 'supertest';
import app from '../src/app.js';
import { connectDB, disconnectDB } from '../src/config/database.js';

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await disconnectDB();
});

test('create user', async () => {
  const res = await request(app)
    .post('/users')
    .send({ name: 'Test User' });

  expect(res.status).toBe(201);
  expect(res.body.name).toBe('Test User');
});
