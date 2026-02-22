🚀 Real-Time Expert Booking System

A full-stack Real-Time Expert Session Booking Platform where users can browse experts, view available slots, and book sessions instantly with real-time updates.

Built using React + Node.js + Express + MongoDB + Socket.IO and deployed on AWS S3 (Frontend) and Render (Backend API).

📌 Live Demo

🌐 Frontend (AWS S3 Hosting)
👉 https://expert-booking-app-frontend.s3-website.ap-south-1.amazonaws.com

⚙️ Backend API (Render)
👉 https://expert-booking-api.onrender.com

📹 Demo Video

🎥 Project Walkthrough Video:
👉 (Paste your video link here)

🧠 Features

✅ Expert listing system
✅ Real-time slot booking
✅ Prevents double booking
✅ Live booking updates using Socket.IO
✅ REST API architecture
✅ MongoDB Atlas cloud database
✅ Responsive React UI
✅ Cloud deployment

🏗️ Tech Stack
Frontend

React.js

Axios

React Router

Socket.IO Client

CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

Socket.IO

CORS

dotenv

Cloud & Deployment

AWS S3 (Frontend Hosting)

Render (Backend Hosting)

MongoDB Atlas (Database)

📂 Project Structure
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
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/real-time-expert-booking-system.git
cd real-time-expert-booking-system
2️⃣ Backend Setup
cd backend
npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Run backend:

npm start
3️⃣ Seed Database (Add Experts)
node seed.js
4️⃣ Frontend Setup
cd frontend
npm install
npm start
🔌 API Endpoints
Experts
Method	Endpoint	Description
GET	/api/experts	Get all experts
Bookings
Method	Endpoint	Description
POST	/api/bookings	Create booking
PATCH	/api/bookings/:id/status	Update booking
GET	/api/bookings	Get bookings by email
🔄 Real-Time Flow

User selects expert slot

Booking request sent to backend

MongoDB saves booking

Socket.IO emits update

All clients receive live availability update

🛡️ Database Design
Expert Model

Name

Category

Experience

Rating

Bio

Available Slots

Booking Model

Expert ID

User Details

Date & Time Slot

Status

Unique index prevents double booking

☁️ Deployment
Frontend

Built using:

npm run build

Hosted on AWS S3 Static Website Hosting.

Backend
Deployed using Render Web Service.
Environment variables configured in Render dashboard.

🧪 Testing Steps:

Open frontend URL
View expert list
Select a slot
Book session
Verify real-time update

👨‍💻 Author:
Durga Dhanush Yaragini
Final Year B.Tech Student

GitHub: https://github.com/YARAGANIDURGADHANUSH
