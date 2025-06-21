// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";

const Login = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error message

    try {
      const response = await axios.post(
        "https://backend.learnershakil.workers.dev/signin",
        formData
      );

      if (response.status === 200) {
        alert("Login successful");
        setError("");
        closeModal(); // Close modal on success
      }
    } catch (error) {
      setError("Invalid credentials. Please try again.");
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
