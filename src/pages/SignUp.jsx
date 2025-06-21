// src/components/SignUp.js
import React, { useState } from "react";
import axios from "axios";

const SignUp = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    password: "",
    linkedin: "",
    college: "",
    course: "",
    year: 1,
    phone: "",
    question1: "",
    question2: "",
    question3: "",
  });

  const [error, setError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
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
        "https://backend.learnershakil.workers.dev/signup",
        formData
      );

      if (response.status === 200) {
        setFormSubmitted(true);
        setError("");
        closeModal(); // Close modal on success
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h2>Sign Up</h2>
      {formSubmitted ? (
        <p>Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
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
            <label>GitHub Username:</label>
            <input
              type="text"
              name="github"
              value={formData.github}
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
          <div>
            <label>LinkedIn:</label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>College:</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Course:</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Year:</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Question 1:</label>
            <input
              type="text"
              name="question1"
              value={formData.question1}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Question 2:</label>
            <input
              type="text"
              name="question2"
              value={formData.question2}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Question 3:</label>
            <input
              type="text"
              name="question3"
              value={formData.question3}
              onChange={handleInputChange}
              required
            />
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Sign Up"}
          </button>
        </form>
      )}
    </div>
  );
};

export default SignUp;
