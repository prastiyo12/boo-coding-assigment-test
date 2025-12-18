# Backend Coding Assignment

This repository contains the solution for the backend coding assignment, covering profile management, commenting, voting functionality, and automated tests.

The project is built using **Node.js (ESM)**, **Express**, **MongoDB (in-memory)**, and **Jest**.

---

## ✨ Features

### Part 1 – Profile Management
- Store profile data in MongoDB using `mongodb-memory-server`
- Create profiles via REST API
- Retrieve profiles by ID
- Profile images are reused (no upload handling required)

### Part 2 – Commenting & Voting API
- Create user accounts (name only, no authentication)
- Post comments
- Retrieve comments (sorted by newest first)
- Like / unlike comments (toggle behavior)
- All data stored in the same database

### Part 3 – Automated Tests
- Jest + Supertest
- Tests cover:
  - Profile creation & retrieval
  - User creation
  - Comment creation
  - Like / unlike functionality
- Database runs fully in memory (no external dependencies)

---

## 🛠 Tech Stack

- Node.js (ES Modules)
- Express
- MongoDB + Mongoose
- mongodb-memory-server
- Jest
- Supertest

---

## 📁 Project Structure

