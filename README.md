# pwd-authentication
# React Auth App

A simple authentication app built with **React (frontend)** and **Express, MongoDB (backend)**.

## Features
- User Registration
- User Login
- Password Hashing with bcrypt
- MongoDB Database

## Project Structure
```
react-auth-app/
├── backend/
│   ├── config/
│   │   ├── db.js  # MongoDB connection
│   ├── models/
│   │   ├── User.js  # User schema
│   ├── routes/
│   │   ├── auth.js  # Authentication routes
│   ├── .env  # Environment variables
│   ├── package.json
│   ├── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx  # React Router setup
│   │   ├── Login.jsx  # Login component
│   │   ├── Register.jsx  # Register component
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── public/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│
├── .gitignore
├── README.md
```

## Setup
### **Backend**
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### **Frontend**
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend app:
   ```sh
   npm run dev
   ```

## API Endpoints
### **Register a New User**
- **POST** `/register`
- Request Body:
  ```json
  {
    "username": "exampleUser",
    "password": "securePassword"
  }
  ```
- Response:
  ```json
  "User registered successfully"
  ```

### **Login**
- **POST** `/login`
- Request Body:
  ```json
  {
    "username": "exampleUser",
    "password": "securePassword"
  }
  ```
- Response:
  ```json
  "Login successful"
  ```

## Notes
- The app uses bcrypt for password hashing.
- MongoDB connection is managed using Mongoose.

Based on https://github.com/Jeevan0606/Password