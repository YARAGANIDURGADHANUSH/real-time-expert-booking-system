import axios from "axios";

const API = axios.create({
  baseURL: "https://expert-booking-api.onrender.com"
});

export default API;