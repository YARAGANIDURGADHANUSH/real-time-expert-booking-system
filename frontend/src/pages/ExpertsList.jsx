import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import API from "../services/api";

function ExpertsList() {
  const navigate = useNavigate();

  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/experts")
      .then((res) => {
        setExperts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ padding: 20 }}>Loading experts...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Expert Listing</h1>

      {experts.map((expert) => (
        <div
          key={expert._id}
          onClick={() => navigate(`/expert/${expert._id}`)}
          style={{
            border: "1px solid #ccc",
            padding: 15,
            marginBottom: 12,
            borderRadius: 10,
            cursor: "pointer",
            background: "#f9f9f9",
          }}
        >
          <h3>{expert.name}</h3>
          <p><b>Category:</b> {expert.category}</p>
          <p><b>Experience:</b> {expert.experience} years</p>
          <p><b>Rating:</b> ⭐ {expert.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default ExpertsList;