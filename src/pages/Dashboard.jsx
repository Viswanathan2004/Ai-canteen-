import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import dashboardBg from "../assets/dashboard-bg.jpg"; // Place your background image in assets folder

const features = [
  { path: "/diet-analysis", label: "AI Diet Analysis", icon: "🥗" },
  { path: "/chatbot", label: "AI Chatbot Assistant", icon: "🤖" },
  { path: "/voice-order", label: "Voice Order", icon: "🎤" },
  { path: "/track-order", label: "Track Your Order", icon: "🛵" },
  { path: "/offers", label: "View Offers", icon: "💸" },
  { path: "/qr-menu", label: "QR Menu", icon: "📱" },
  { path: "/shop", label: "Shop", icon: "🛒" },
  { path: "/products", label: "Products", icon: "🥪" },
  { path: "/items", label: "Browse Items", icon: "🍱" },
  { path: "/search", label: "Search Menu", icon: "🔎" },
  { path: "/about", label: "About Us", icon: "🏫" },
  { path: "/contact", label: "Contact", icon: "☎️" },
];

const Dashboard = () => (
  <div
    className="dashboard stylish-dashboard"
    style={{
      backgroundImage: `url(${dashboardBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
    }}
  >
    <div className="dashboard-overlay">
      <h1 className="dashboard-title">🍽️ Smart Canteen Dashboard</h1>
      <div className="dashboard-grid">
        {features.map((f) => (
          <Link className="dashboard-card" to={f.path} key={f.path}>
            <div className="dashboard-icon">{f.icon}</div>
            <div className="dashboard-label">{f.label}</div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Dashboard;