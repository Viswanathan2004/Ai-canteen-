import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // Replace this with your backend signup logic
    if (form.email && form.password && form.name) {
      setSuccess("Signup successful! You can now login.");
      setForm({ name: "", email: "", password: "" });
    } else {
      setError("All fields are required.");
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <div className="signup-error">{error}</div>}
      {success && <div className="signup-success">{success}</div>}
      <div className="signup-links">
        <a href="/login">Already have an account? Login</a>
      </div>
    </div>
  );
};

export default Signup;