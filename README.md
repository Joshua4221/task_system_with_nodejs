# Node.js Task Management API

A lightweight, in-memory **Task Management REST API** built with **Node.js** using **Express**. This project mirrors a clean architecture pattern inspired by Rust-based backends, supporting modular design and testability.

---

## 📁 Project Structure

```
.
├── controller.js          # TaskController and Task class logic
├── index.js               # Application entry point and server setup
├── routes.js              # API route definitions
├── tests/
│   └── taskController.test.js  # Jest tests for the controller logic
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm (Node package manager)

### Install Dependencies
```bash
npm install
```

### Start the Server
```bash
node index.js
```

Server runs at: `http://localhost:3000`

---

## ⚙️ Features

- Create a new task
- Retrieve all tasks
- Retrieve a task by ID
- Update a task
- Delete a task

Each task includes:
- `id`: number (auto-incremented)
- `title`: string
- `description`: string
- `status`: string

---

## 🔗 API Endpoints

Base URL: `http://localhost:3000/api/task`

### Create a Task
```
POST /api/task
Content-Type: application/json
{
  "title": "My Task",
  "description": "Do something important",
  "status": "pending"
}
```

### Get All Tasks
```
GET /api/task
```

### Get Task By ID
```
GET /api/task/:id
```

### Update Task
```
PATCH /api/task/:id
Content-Type: application/json
{
  "title": "Updated Title",
  "description": "Updated description",
  "status": "done"
}
```

### Delete Task
```
DELETE /api/task/:id
```

---

## 🧪 Testing

Tests are written using [Jest](https://jestjs.io/).

### 1. Install Jest
```bash
npm install --save-dev jest
```

### 2. Add the test script to `package.json`
```json
"scripts": {
  "test": "jest"
}
```

### 3. Run Tests
```bash
npm test
```

All test files should be placed in the `tests/` directory and end with `.test.js`.

---

## 📊 Future Improvements

- Add database (MongoDB, PostgreSQL)
- Add input validation (Joi or express-validator)
- Add authentication and user accounts
- Add pagination and filtering
- Integrate Swagger/OpenAPI for documentation

---

## 🙌 Credits

- Built with [Express.js](https://expressjs.com)
- Testing with [Jest](https://jestjs.io)

---

## 📝 License

This project is licensed under the MIT License.

