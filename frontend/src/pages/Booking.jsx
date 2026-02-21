import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../services/api";

function Booking() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { expertId, date, timeSlot } = state || {};

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/bookings", {
        expertId,
        date,
        timeSlot,
        ...form
      });

      alert("Booking Successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Book Session</h1>

      <p><b>Date:</b> {date}</p>
      <p><b>Time:</b> {timeSlot}</p>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br/><br/>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br/><br/>
        <input name="phone" placeholder="Phone" onChange={handleChange} required /><br/><br/>
        <textarea name="notes" placeholder="Notes" onChange={handleChange} /><br/><br/>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;