import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ExpertsList from "./pages/ExpertsList";
import ExpertDetail from "./pages/ExpertDetail";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <Router>
      <Routes>

        {/* Expert Listing */}
        <Route path="/" element={<ExpertsList />} />

        {/* Expert Detail */}
        <Route path="/expert/:id" element={<ExpertDetail />} />

        {/* Booking Page */}
        <Route path="/booking" element={<Booking />} />

        {/* My Bookings Page */}
        <Route path="/my-bookings" element={<MyBookings />} />

      </Routes>
    </Router>
  );
}

export default App;