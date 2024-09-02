import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/microfrontend1");
  };
  const handleCounterClick = () => {
    navigate("/microfrontend1/about");
  };

  return (
    <div className="dashboard">
      <div className="card" onClick={handleCardClick}>
        <h2>Shopping Cart</h2>
        <p>View your items and proceed to checkout.</p>
      </div>
      <div className="card" onClick={handleCounterClick}>
        <h2>Analytics</h2>
        <p>Overview of your performance metrics.</p>
      </div>
      {/* <div className="card">
        <h2>Notifications</h2>
        <p>Check your recent notifications and alerts.</p>
      </div>
      <div className="card">
        <h2>Profile</h2>
        <p>Manage your personal information and settings.</p>
      </div> */}
    </div>
  );
};

export default Dashboard;
