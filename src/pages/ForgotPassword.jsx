import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your backend password reset logic
    if (email) {
      setMsg("Password reset instructions sent to your email.");
      setEmail("");
    }
  };

  return (
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      {msg && <div className="forgot-password-msg">{msg}</div>}
      <div className="forgot-password-links">
        <a href="/login">Back to Login</a>
      </div>
    </div>
  );
};

export default ForgotPassword;