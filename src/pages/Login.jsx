import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // Replace with your backend authentication API call.
    if (form.email === "user@canteen.com" && form.password === "password") {
      localStorage.setItem("user", form.email);
      window.location.href = "/";
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      {error && <div className="login-error">{error}</div>}
      <div className="login-links">
        <a href="/signup">Sign Up</a> | <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;