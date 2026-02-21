# 🚀 Real-Time Expert Session Booking System

A full-stack real-time expert booking platform where users can browse experts, view available slots, and book sessions with live slot updates.

Built as part of a Full-Stack Engineering Assignment using React, Node.js, Express, MongoDB, and Socket.io.

---

## 📌 Features

### 👨‍⚕️ Expert Listing
- Display experts with name, category, experience, and rating
- Search experts by name
- Filter experts by category
- Pagination support
- Proper loading and error states

### 📄 Expert Detail Screen
- View detailed expert profile
- Available slots grouped by date
- Real-time slot updates when another user books

### 📅 Booking Screen
- Booking form with validation:
  - Name
  - Email
  - Phone
  - Date
  - Time Slot
  - Notes
- Prevents double booking
- Success confirmation message
- Booked slots automatically disabled

### 📚 My Bookings Screen
- View bookings using email
- Booking status:
  - Pending
  - Confirmed
  - Completed

---

## 🧱 Tech Stack

### Frontend
- React (Web)
- Axios
- React Router
- Socket.io Client

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io

### Database
- MongoDB Atlas / Local MongoDB

---

## 🏗 System Architecture


React Frontend
│
REST API + WebSocket
│
Node.js + Express Server
│
MongoDB Database


---

## 📂 Project Structure


project-root/
│
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── models/
│ │ ├── Expert.js
│ │ └── Booking.js
│ ├── controllers/
│ │ ├── expertController.js
│ │ └── bookingController.js
│ ├── routes/
│ │ ├── expertRoutes.js
│ │ └── bookingRoutes.js
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── ExpertList.js
│ │ │ ├── ExpertDetail.js
│ │ │ ├── Booking.js
│ │ │ └── MyBookings.js
│ │ ├── components/
│ │ ├── App.js
│ │ └── index.js
│
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository


git clone https://github.com/your-username/expert-booking-system.git

cd expert-booking-system


---

### 2️⃣ Backend Setup


cd backend
npm install


Create `.env` file:


PORT=5000
MONGO_URI=your_mongodb_connection_string


Run backend:


npm run dev


Backend runs at:


http://localhost:5000


---

### 3️⃣ Frontend Setup


cd frontend
npm install
npm start


Frontend runs at:


http://localhost:3000


---

## 🔌 API Endpoints

### Experts

| Method | Endpoint | Description |
|-------|---------|-------------|
| GET | /experts | Get experts with pagination and filters |
| GET | /experts/:id | Get expert details |

### Bookings

| Method | Endpoint | Description |
|-------|---------|-------------|
| POST | /bookings | Create booking |
| GET | /bookings?email= | Get bookings by email |
| PATCH | /bookings/:id/status | Update booking status |

---

## ⚠️ Critical Implementations

### ✅ Double Booking Prevention
MongoDB validation ensures only one booking exists for:

expertId + date + timeSlot


### ✅ Real-Time Slot Updates
Implemented using Socket.io:
1. Booking created
2. Backend emits socket event
3. Connected clients update slots instantly

### ✅ Validation & Error Handling
- Backend request validation
- Meaningful API error responses
- Frontend form validation
- Loading and error UI states

---

## 📸 Application Screenshots

- Expert Listing Screen
- Expert Detail Screen
- Booking Screen
- Booking Success Confirmation

(Add screenshots in repository if required)

---

## 🎥 Demo Video


https://drive.google.com/your-demo-video-link


---

## 📸 Screenshots

### Expert Listing
![Expert List](screenshots/expert-list.png)

### Expert Detail
![Expert Detail](screenshots/expert-detail.png)

### Booking Success
![Booking](screenshots/booking-success.png)

---


## 🌍 Deployment (Optional)

Frontend: Vercel / Netlify  
Backend: Render / Railway

---

## 🚧 Future Improvements
- JWT Authentication
- Payment Integration
- Admin Dashboard
- Email Notifications
- Calendar Integration

---

## 👨‍💻 Author

Durga Dhanush Yaragani  
B.Tech Final Year — AI/ML  
Full Stack Developer (Learning Phase)

---

## ⭐ Assignment Notes

This project was developed within a 48-hour deadline focusing on:
- Clean folder architecture
- Real-time communication
- Backend data consistency
- Production-style REST API design