import React, { useState } from "react";
import API from "../services/api";

function MyBookings() {

  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await API.get(`/bookings?email=${email}`);
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>My Bookings</h1>

      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={fetchBookings} style={{ marginLeft: 10 }}>
        Search
      </button>

      <hr />

      {bookings.map((b) => (
        <div
          key={b._id}
          style={{
            border: "1px solid #ccc",
            padding: 12,
            marginBottom: 10,
            borderRadius: 8
          }}
        >
          <h3>{b.expertId?.name}</h3>
          <p>Date: {b.date}</p>
          <p>Time: {b.timeSlot}</p>
          <p>Status: <b>{b.status}</b></p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;