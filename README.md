# 🚀 Real-Time Expert Booking System

**A full-stack Real-Time Expert Session Booking Platform** where users can browse experts, view available slots, and book sessions instantly with **live real-time updates**.

**Built using React + Node.js + Express + MongoDB + Socket.IO and deployed on AWS S3 (Frontend) and Render (Backend API).**.

---

## 📌 Live Demo

🌐 **Frontend (AWS S3 Hosting)**
👉 [https://expert-booking-app-frontend.s3-website.ap-south-1.amazonaws.com](https://expert-booking-app-frontend.s3-website.ap-south-1.amazonaws.com)

⚙️ **Backend API (Render)**
👉 [https://expert-booking-api.onrender.com](https://expert-booking-api.onrender.com)

---

## 📹 Demo Video

🎥 **Project Walkthrough Video**
👉 *(Paste your video link here)*

---

## 🧠 Features

* ✅ Expert listing system
* ✅ Real-time slot booking
* ✅ Double booking prevention
* ✅ Live booking updates using Socket.IO
* ✅ REST API architecture
* ✅ MongoDB Atlas cloud database
* ✅ Responsive React UI
* ✅ Cloud deployment ready

---

## 🏗️ Tech Stack

### 🎨 Frontend

* React.js
* Axios
* React Router
* Socket.IO Client
* CSS

### ⚙️ Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* CORS
* dotenv

### ☁️ Cloud & Deployment

* AWS S3 — Frontend Hosting
* Render — Backend Hosting
* MongoDB Atlas — Database

---

## 📂 Project Structure

```
expert-booking-system/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── sockets/
│   ├── server.js
│   └── seed.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/real-time-expert-booking-system.git
cd real-time-expert-booking-system
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside **backend**:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Seed Database (Add Experts)

```bash
node seed.js
```

---

### 4️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔌 API Endpoints

### 👨‍🏫 Experts

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | `/api/experts` | Get all experts |

---

### 📅 Bookings

| Method | Endpoint                   | Description           |
| ------ | -------------------------- | --------------------- |
| POST   | `/api/bookings`            | Create booking        |
| PATCH  | `/api/bookings/:id/status` | Update booking status |
| GET    | `/api/bookings`            | Get bookings by email |

---

## 🔄 Real-Time Booking Flow

1. User selects expert slot
2. Booking request sent to backend
3. MongoDB stores booking data
4. Socket.IO emits real-time update
5. All connected clients receive live availability updates

---

## 🛡️ Database Design

### Expert Model

* Name
* Category
* Experience
* Rating
* Bio
* Available Slots

### Booking Model

* Expert ID
* User Details
* Date & Time Slot
* Status

✅ **Unique index prevents double booking**

---

## ☁️ Deployment

### Frontend

* Built using:

```bash
npm run build
```

* Hosted on **AWS S3 Static Website Hosting**

### Backend

* Deployed using **Render Web Service**
* Environment variables configured in Render dashboard

---

## 🧪 Testing Steps

1. Open frontend URL
2. View expert list
3. Select available slot
4. Book session
5. Verify real-time updates across clients

---

## 👨‍💻 Author

**Durga Dhanush Yaragini**
🎓 Final Year B.Tech Student

🔗 GitHub:
[https://github.com/YARAGANIDURGADHANUSH](https://github.com/YARAGANIDURGADHANUSH)
