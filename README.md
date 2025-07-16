# 🍎 Workout & Nutrition Tracker (WIP)

![Work in Progress](https://img.shields.io/badge/status-WIP-yellow)

## Table of Contents
- [About](#-about)
- [Features](#%EF%B8%8F-features-current)
- [Tech Stack](#-tech-stack)
- [Upcoming Features](#-upcoming-features)
- [Getting Started](#-getting-started)
- [Contributing](#%EF%B8%8F-contributing)
- [License](#-license)
- [Contact](#contact)

---

## 📝 About

**A Full-Stack Fitness & Nutrition Tracking App**
- Log Daily Workouts
- Track Nutrition
- Track Bodyweight & Measurements

This project is in early development and will grow into a complete mobile platform for managing health goals with secure authentication 
and personalized data logging. I plan to develop it as a web app initially and wrap it in React Native for deployment on mobile 
platforms when it is ready.

---

## 🎞️ Features (Current)

- ✅ User signup with hashed passwords using bcrypt
- ✅ Secure login with JWT token authentication
- ✅ Protected account deletion route using token verification
- ✅ PostgreSQL database integration with Express backend
- ✅ Environment-based config for security using `.env`

---

## 💻 Tech Stack

**Frontend (Planned):**
- React (TypeScript)
- Next.js (App Router)
- Node.js
- Tailwind CSS

**Backend (In Progress):**
- Node.js + Express
- PostgreSQL managed with Node's pg client
- JWT for session management
- bcrypt for secure password hashing

**Dev Tools:**
- Postman for API testing
- dotenv for managing environment variables
- Version control with Git and GitHub

---

## 🔜 Upcoming Features

**Login-protected Endpoints for:**
  - Calorie & Macro Intake
  - Workouts
  - Bodyweight & Measurements
  - Profile Details
  - Goals

**Frontend UI:**
  - Inputting & Viewing Data
  - Interactive Graphs & Charts
  - Pages For Different Functions (Workout Tracker, Nutrition Tracker, etc.)

**Deployment plan:**
  - AWS
  - Wrap in React Native For Mobile Accessibility

---

## 🚀 Getting Started
To run this project locally:

Clone The Repo:

```bash
git clone https://github.com/ctucker41/workout-nutrition-app.git
cd workout-nutrition-app/server
npm install
```

Create a .env file in /server:

```bash
DATABASE_URL={Replace This Text With Your PostgreSQL Connection URL}
JWT_SECRET={Replace This Text With Your Secret Key}
```
Run the backend server:

```bash
npm run dev
```

I use Postman to test endpoints.

---

## ⚒️ Contributing
Feel free to open issues or submit pull requests if you'd like to suggest improvements or fixes!

---

## 🪪 License
This project is licensed under the MIT License — see the LICENSE file for details.

---

## Contact
Christian Tucker  
Email: ctuckercareers@yahoo.com  
GitHub: https://github.com/ctucker41  
LinkedIn: www.linkedin.com/in/christian-tucker-55b423196 
