import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import DietAnalysis from "./pages/DietAnalysis";
import Chatbot from "./pages/Chatbot";
import VoiceOrder from "./pages/VoiceOrder";
import TrackOrder from "./pages/TrackOrder";
import Offers from "./pages/Offers";
import QRMenu from "./pages/QRMenu";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import Items from "./pages/Items";
import SearchResults from "./pages/SearchResults";
import AboutUs from "./pages/AboutUs";
import ContactSection from "./pages/ContactSection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/diet-analysis" element={<DietAnalysis />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/voice-order" element={<VoiceOrder />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/qr-menu" element={<QRMenu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/items" element={<Items />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;