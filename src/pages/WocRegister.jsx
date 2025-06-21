import React, { useState } from "react";
import axios from "axios";
import AnimatedBackground from "../components/AnimatedBackground";

const WocRegister = () => {
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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://woc.learnersarc.com/api/register`,
        formData
      );
      if (response.status === 200) {
        setFormSubmitted(true);
        setError(""); // Reset error if successfulz
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <AnimatedBackground />
      <div className="h-screen text-white p-6 sm:p-8 lg:p-12 overflow-auto absolute top-0 left-0 w-full">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-indigo-400">
          Winter of Code Registration
        </h1>

        {/* Instructions */}
        <div className="mb-6 bg-gray-800 bg-opacity-60 backdrop-blur-lg border p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">Video Submission Instructions</h3>
          <p className="text-base mb-2">
            Please upload a short video (1.5–3 minutes) to YouTube or any video platform and provide the URL in the field below.
          </p>
          <p className="text-base mb-2">
            In your video, kindly cover the following:
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Introduction:</strong> Briefly introduce yourself, your background, and your skills.</li>
            <li><strong>Motivation:</strong> Explain why you are excited about Winter of Code and what motivates you to join.</li>
            <li><strong>Why you're a perfect fit:</strong> Highlight why you believe you’re a great fit for WoC and how you can contribute.</li>
          </ul>
          <p className="text-base mt-2">
            Make sure your video is either publicly accessible or unlisted for us to view.
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-violet-800 bg-opacity-20 backdrop-blur-lg border sm:border-2 border-violet-700 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-medium mb-6 text-center text-indigo-400">
            Apply Now
          </h2>

          {formSubmitted && (
            <div className="text-green-500 text-center mb-4">
              <p>Registration successful! We will contact you soon.</p>
            </div>
          )}

          {error && (
            <div className="text-red-500 text-center mb-4">
              <p>{error}</p>
            </div>
          )}

<form onSubmit={handleSubmit}>
            <div className="flex sm:flex-row flex-col gap-4 w-full">
              {/* Name */}
              <div className="mb-4 w-full">
                <label
                  htmlFor="name"
                  className="block text-base sm:text-lg mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 bg-opacity-30 text-white"
                />
              </div>

              {/* Email */}
              <div className="mb-4 w-full">
                <label
                  htmlFor="email"
                  className="block text-base sm:text-lg mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 bg-opacity-30 text-white"
                />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-4 w-full">
              {/* GitHub */}
              <div className="mb-4 w-full">
                <label
                  htmlFor="github"
                  className="block text-base sm:text-lg mb-2"
                >
                  GitHub Username
                </label>
                <input
                  type="text"
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 bg-opacity-30 text-white"
                />
              </div>

              {/* Password */}
              <div className="mb-4 w-full">
                <label
                  htmlFor="password"
                  className="block text-base sm:text-lg mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 bg-opacity-30 text-white"
                />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-4 w-full">
              {/* LinkedIn */}
              <div className="mb-4 w-full">
                <label
                  htmlFor="linkedin"
                  className="block text-base sm:text-lg mb-2"
                >
                  LinkedIn Profile
                </label>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 bg-opacity-30 text-white"
                />
              </div>

              {/* College */}
              <div className="mb-4 w-full">
                <label
                  htmlFor="college"
                  className="block text-base sm:text-lg mb-2"
                >
                  College Name
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 bg-opacity-30 text-white"
                />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-4 w-full">
              {/* Course */}
              <div className="mb-4 w-full">
                <label
                  htmlFor="course"
                  className="block text-base sm:text-lg mb-2"
                >
                  Course
                </label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 bg-opacity-30 text-white"
                />
              </div>

              {/* Year */}
              <div className="mb-4 w-full">
                <label
                  htmlFor="year"
                  className="block text-base sm:text-lg mb-2"
                >
                  Year of Study
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 bg-opacity-30 text-white"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-base sm:text-lg mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 bg-opacity-30 text-white"
              />
            </div>

            {/* Questions */}
            <div className="mb-4">
              <label
                htmlFor="question1"
                className="block text-base sm:text-lg mb-2"
              >
                Why do you want to participate in Winter of Code?
              </label>
              <textarea
                id="question1"
                name="question1"
                value={formData.question1}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 bg-opacity-30 text-white"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="question2"
                className="block text-base sm:text-lg mb-2"
              >
                What are your goals in Winter of Code?
              </label>
              <textarea
                id="question2"
                name="question2"
                value={formData.question2}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 bg-opacity-30 text-white"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="question3"
                className="block text-base sm:text-lg mb-2"
              >
                Any other additional information?
              </label>
              <textarea
                id="question3"
                name="question3"
                value={formData.question3}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 bg-opacity-30 text-white"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white text-lg sm:text-xl rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WocRegister;
