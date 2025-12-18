# Backend Coding Assignment – Boo

This repository contains the solution for the backend coding assignment.  
The implementation focuses on clean API design, proper data modeling, and automated testing, following the requirements provided in the assignment.

---

## ✅ Overview

The project is divided into three main parts:

1. **Profile Management API**
2. **Commenting & Voting API**
3. **Automated Tests**

All data is stored in an **in-memory MongoDB instance** using `mongodb-memory-server`, making the project easy to run and test without external dependencies.

---

## 🛠 Tech Stack

- **Node.js** (ES Modules)
- **Express**
- **MongoDB + Mongoose**
- **mongodb-memory-server**
- **Jest**
- **Supertest**

---

## 📁 Project Structure

```
src/
├── app.js                # Express app configuration
├── server.js             # Application bootstrap
├── config/
│   └── database.js       # MongoDB in-memory setup
├── models/               # Mongoose schemas
├── controllers/          # Business logic
├── routes/               # API routes

tests/
├── profile.test.js       # Profile API tests
├── comment.test.js       # Comment & voting tests
├── user.test.js          # User API tests
```

---

## ✨ Features

### Part 1 – Profile Management
- Store profile data in MongoDB (in-memory)
- Create new profiles via API
- Retrieve profiles by ID
- Profile images are reused (no upload handling)

### Part 2 – Commenting & Voting
- Create user accounts (name only)
- Post comments
- Retrieve comments (sorted by newest first)
- Like / unlike comments (toggle behavior)
- All entities stored in the same database

### Part 3 – Automated Testing
- Jest + Supertest
- Covers:
  - Profile creation & retrieval
  - User creation
  - Comment creation
  - Like / unlike logic
- Database is started and destroyed automatically during tests

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

---

### 2. Run the server

```bash
npm start
```

Server will run on:

```
http://localhost:3000
```

---

### 3. Run automated tests

```bash
npm test
```

Expected output:

```
PASS  tests/profile.test.js
PASS  tests/comment.test.js
PASS  tests/user.test.js

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
```

---

## 📡 API Endpoints

### Profiles
- `POST /profiles`
- `GET /profiles/:id`

### Users
- `POST /users`

### Comments
- `POST /comments`
- `GET /comments`
- `POST /comments/:id/like`

---

## 🧪 Notes on Testing & ESM

This project uses **native ES Modules** (`"type": "module"`).  
Jest is executed using Node’s VM module support to ensure compatibility without Babel:

```bash
node --experimental-vm-modules node_modules/jest/bin/jest.js --runInBand
```

---

## 📌 Assumptions & Scope

- Authentication is intentionally omitted
- Image uploads are not implemented
- Anyone can access and use any user account
- Frontend implementation is out of scope
- Focus is on backend logic, structure, and testability

---

## ✅ Status

All requirements from the coding assignment have been fully implemented and verified with automated tests.
