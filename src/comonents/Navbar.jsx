import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../logo.svg";

const Navbar = () => (
  <nav className="navbar">
    <img src={logo} alt="Canteen Logo" width={36} height={36} />
    <Link to="/">Dashboard</Link>
    <Link to="/diet-analysis">Diet Analysis</Link>
    <Link to="/chatbot">Chatbot</Link>
    <Link to="/voice-order">Voice Order</Link>
    <Link to="/track-order">Track Order</Link>
    {/* Add more nav links as needed */}
  </nav>
);

export default Navbar;