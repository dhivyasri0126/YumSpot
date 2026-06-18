# README.md

````md
# 🍽 YumSpot

YumSpot is a modern MERN Stack Restaurant Booking Application where users can discover restaurants, reserve tables, and track booking status. Admins can manage all reservations by approving or rejecting bookings.

---

# 🚀 Features

## 👤 User Features

- User Signup & Login
- JWT Authentication
- Browse Restaurants
- Search Restaurants
- Book Tables
- View Previous Bookings
- Track Booking Status
- Responsive Modern UI
- Glassmorphism Design

---

## 🛠 Admin Features

- Admin Login
- View All Bookings
- Approve Reservations
- Reject Reservations
- Manage Customer Bookings

---

# 🧑‍💻 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- CSS3

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# 📁 Project Structure

```bash
Restaurant
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── pages
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│   └── package.json
│
└── README.md
````

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/foodietable.git
```

---

## 2️⃣ Install Client Dependencies

```bash
cd client
npm install
```

---

## 3️⃣ Install Server Dependencies

```bash
cd server
npm install
```

---

# 🌐 MongoDB Setup

Create MongoDB Atlas Cluster and replace your MongoDB URL inside:

```bash
server/server.js
```

Example:

```js
mongoose.connect(
  "mongodb+srv://username:password@cluster.mongodb.net/restaurantDB"
);
```

---

# ▶️ Run Project

## Start Backend

```bash
cd server
npm run dev
```

---

## Start Frontend

```bash
cd client
npm run dev
```

---

# 🔐 Authentication

* JWT Token Based Authentication
* Protected Routes
* Role-Based Access Control

---

# 👨‍💼 Roles

## User

* Book Tables
* View Own Bookings
* Track Booking Status

## Admin

* View All Bookings
* Approve/Reject Reservations

---

# 🎨 UI Features

* Responsive Design
* Restaurant Slideshow
* Glassmorphism Theme
* Animated Hero Section
* Elegant Typography
* Dynamic Navbar

---

# 📦 API Endpoints

## Authentication

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | /api/auth/signup | Register User |
| POST   | /api/auth/login  | Login User    |

---

## Bookings

| Method | Endpoint                 | Description        |
| ------ | ------------------------ | ------------------ |
| POST   | /api/bookings            | Create Booking     |
| GET    | /api/bookings/mybookings | User Bookings      |
| GET    | /api/bookings/all        | Admin All Bookings |
| PUT    | /api/bookings/:id        | Approve/Reject     |

---

# 📸 Screens

* Login Page
* Signup Page
* Home Page
* Booking Page
* My Bookings
* Admin Dashboard

---

# 🔮 Future Enhancements

* Payment Gateway
* Email Notifications
* Google Authentication
* Restaurant Reviews
* Live Table Availability
* Admin Analytics Dashboard

---

# 👩‍💻 Author

Developed by Dhivyasri

---

# 📜 License

This project is open source and available under the MIT License.

```
```
