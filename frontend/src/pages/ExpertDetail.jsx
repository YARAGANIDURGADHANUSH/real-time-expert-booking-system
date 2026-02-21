import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function ExpertDetail() {

  // get expert id from URL
  const { id } = useParams();

  // navigation hook
  const navigate = useNavigate();

  // state
  const [expert, setExpert] = useState(null);

  // fetch expert details
  useEffect(() => {
    API.get(`/experts/${id}`)
      .then((res) => setExpert(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // loading state
  if (!expert) {
    return <h2 style={{ padding: 20 }}>Loading...</h2>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{expert.name}</h1>

      <p><b>Category:</b> {expert.category}</p>
      <p><b>Experience:</b> {expert.experience} years</p>
      <p><b>Rating:</b> ⭐ {expert.rating}</p>

      <h2>Available Slots</h2>

      {expert.availableSlots.map((day) => (
        <div key={day._id} style={{ marginBottom: 15 }}>
          <h3>{day.date}</h3>

          {day.slots.map((slot) => (
            <button
              key={slot}
              onClick={() =>
                navigate("/booking", {
                  state: {
                    expertId: expert._id,
                    date: day.date,
                    timeSlot: slot,
                  },
                })
              }
              style={{
                margin: 5,
                padding: "8px 12px",
                borderRadius: 6,
                border: "1px solid gray",
                cursor: "pointer",
                background: "#f4f4f4"
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