import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import socket from "../services/socket";

function ExpertDetail() {
  const { id } = useParams();
  const [expert, setExpert] = useState(null);

  // Fetch expert
  const fetchExpert = () => {
    API.get(`/experts/${id}`)
      .then(res => setExpert(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchExpert();

    // ⭐ listen realtime booking event
    socket.on("slotBooked", () => {
      fetchExpert(); // reload slots instantly
    });

    return () => socket.off("slotBooked");
  }, [id]);

  if (!expert) return <h2 style={{padding:20}}>Loading...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{expert.name}</h1>

      <p><b>Category:</b> {expert.category}</p>
      <p><b>Experience:</b> {expert.experience} years</p>

      <h2>Available Slots</h2>

      {expert.availableSlots.map(day => (
        <div key={day._id}>
          <h3>{day.date}</h3>

          {day.slots.map(slot => (
            <button
              key={slot}
              style={{
                margin:5,
                padding:"8px 12px",
                borderRadius:6,
                border:"1px solid gray"
              }}
            >
              {slot}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ExpertDetail;