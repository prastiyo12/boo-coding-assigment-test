// tests/profile.test.js
import request from 'supertest';
import app from '../src/app.js';
import { connectDB, disconnectDB } from '../src/config/database.js';

beforeAll(connectDB);
afterAll(disconnectDB);

test('Create and get profile', async () => {
  const create = await request(app).post('/profiles').send({
    name: 'John',
    title: 'Engineer',
    bio: 'Hello'
  });

  const get = await request(app).get(`/profiles/${create.body._id}`);
  expect(get.body.name).toBe('John');
});
