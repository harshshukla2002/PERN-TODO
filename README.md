# Todo App

A simple and efficient Todo application built with **Next.js**, **Tailwind CSS**, **Node.js**, **Express**, and **PostgreSQL**. This application allows users to manage their tasks efficiently with CRUD functionality.

## Features

- User can **create**, **read**, **update**, and **delete** tasks.
- Real-time updates with seamless UI interactions.
- Clean and responsive UI using **Tailwind CSS**.
- Robust backend powered by **Node.js**, **Express**, and **PostgreSQL**.

---

## Tech Stack

### Frontend

- **Next.js** (React framework)
- **Tailwind CSS** (for styling)

### Backend

- **Node.js** (Runtime environment)
- **Express** (Backend framework)
- **PostgreSQL** (Relational database)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/harshshukla2002/PERN-TODO.git
cd todo-app
```

### 2. Install dependencies

**For frontend:**

```bash
cd client
npm install
```

**For backend:**

```bash
cd server
npm install
```

### 3. Database Setup

1. Ensure **PostgreSQL** is installed and running.
2. Create a database using the following command in PostgreSQL:

```sql
CREATE DATABASE perntodo;
```

3. Update your PostgreSQL credentials in your backend code configuration.

### 4. Run the application

**Start the backend server:**

```bash
cd backend
npm run server
```

**Start the frontend server:**

```bash
cd frontend
npm run dev
```

The application should now be running at `http://localhost:3000`.

---

## API Routes (Backend)

| Method     | Endpoint                | Description       |
| ---------- | ----------------------- | ----------------- |
| **POST**   | `/api/todos/create`     | Create a new todo |
| **GET**    | `/api/todos`            | Get all todos     |
| **PUT**    | `/api/todos/update/:id` | Update a todo     |
| **DELETE** | `/api/todos/delete/:id` | Delete a todo     |

---

## Folder Structure

```
.
├── backend
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── models
│   └── index.js
├── frontend
│   ├── components
│   ├── app
│   ├── public
│   └── utils
└── README.md
```

---

## Usage

1. Add new tasks using the input field.
2. update or delete task as needed.
3. Enjoy a clean and efficient Todo app experience!
