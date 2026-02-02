# Workout & Nutrition Tracker

A full-stack backend application designed to securely manage user-authenticated workout and nutrition data.  
This project focuses on API design, authentication, data modeling, and backend reliability rather than UI polish.

---

## Overview

The application provides a foundation for tracking workouts, nutrition entries, bodyweight, and personal metrics behind authenticated user accounts. It is built as a RESTful service with clear separation of concerns, secure authentication, and environment-based configuration.

The primary goal of this project is to demonstrate backend engineering fundamentals such as API design, authentication flows, data persistence, and defensive handling of user data.

---

## Implemented Features

- User registration with secure password hashing (bcrypt)
- JWT-based authentication and authorization
- Protected routes requiring valid tokens
- Account deletion with authorization checks
- PostgreSQL integration for persistent data storage
- Environment-based configuration using `.env`
- API testing workflows using Postman

---

## Tech Stack

**Backend**
- Node.js
- Express
- PostgreSQL
- JWT for authentication
- bcrypt for password security

**Tooling**
- Postman for API testing
- dotenv for managing configuration
- Version control with Git and GitHub

---

## 🚀 Getting Started
To run this project locally:

Clone the repo:

```bash
git clone https://github.com/ctucker41/workout-nutrition-app.git
cd workout-nutrition-app/server
npm install
```

Create a `.env` file in the `server` directory:

```bash
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_secret_key
```

Run the dev server:

```bash
npm run dev
```
