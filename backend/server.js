/* ===============================
   ENV CONFIG
================================*/
require("dotenv").config();

/* ===============================
   IMPORTS
================================*/
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const expertRoutes = require("./routes/expertRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

/* ===============================
   APP INIT
================================*/
const app = express();

/* ===============================
   MIDDLEWARE
================================*/
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PATCH"],
}));

app.use(express.json());

/* ===============================
   DATABASE CONNECTION
================================*/
connectDB();

/* ===============================
   HTTP SERVER
================================*/
const server = http.createServer(app);

/* ===============================
   SOCKET.IO SETUP
================================*/
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

/* Attach socket to requests */
app.use((req, res, next) => {
  req.io = io;
  next();
});

/* ===============================
   ROUTES
================================*/
app.use("/api/experts", expertRoutes);
app.use("/api/bookings", bookingRoutes);

/* Health check route (VERY IMPORTANT for Render) */
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

/* ===============================
   SOCKET CONNECTION
================================*/
io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

/* ===============================
   START SERVER
================================*/
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});