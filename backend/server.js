require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require('./config/db');
const expertRoutes = require("./routes/expertRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const app = express();
app.use(cors());

/* Middleware */
app.use(cors());
app.use(express.json());

/* DB */
connectDB();

/* Create HTTP server */
const server = http.createServer(app);

/* Socket Setup */
const io = new Server(server, {
  cors: { origin: "*" }
});

/* ⭐ IMPORTANT — ADD BEFORE ROUTES */
app.use((req, res, next) => {
  req.io = io;
  next();
});

/* Routes */
app.use("/api", expertRoutes);
app.use("/api", bookingRoutes);

/* Socket connection listener ⭐ */
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

/* Start server */
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});