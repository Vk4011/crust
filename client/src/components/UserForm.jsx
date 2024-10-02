// UserForm.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow, FaSpinner } from "react-icons/fa"; // Using react-icons

const UserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    business: "",
    turnover: "",
    location: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state for location

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData({
            ...formData,
            location: `Lat: ${latitude}, Long: ${longitude}`,
          });
          setIsLoading(false);
        },
        (error) => {
          console.error("Geolocation Error:", error);
          alert("Unable to retrieve location.");
          setIsLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validations
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.business ||
      !formData.turnover ||
      !formData.location
    ) {
      alert("Please fill all the required fields.");
      return;
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Submit form data (replace with actual submission logic)
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      business: "",
      turnover: "",
      location: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-10 backdrop-blur-md border border-white/30 p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          User Information Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
              placeholder="Enter your full name"
              required
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
              placeholder="Enter your phone number"
              required
            />
          </div>
          {/* Business */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400">Business</label>
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
              placeholder="Enter your business name"
              required
            />
          </div>
          {/* Turn Over */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400">Turn Over</label>
            <input
              type="text"
              name="turnover"
              value={formData.turnover}
              onChange={handleInputChange}
              className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
              placeholder="Enter your business turnover"
              required
            />
          </div>
          {/* Location */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400">Location</label>
            <div className="flex items-center">
              <input
                type="text"
                name="location"
                value={formData.location}
                readOnly
                className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
                placeholder="Click the button to get your location"
                required
              />
              <button
                className="geobutton ml-4 flex items-center justify-center text-white rounded-lg p-2 hover:bg-gray-700 transition-colors duration-200"
                type="button"
                onClick={handleLocationClick}
                aria-label="Get Location"
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin" size={20} />
                ) : (
                  <FaLocationArrow size={20} />
                )}
              </button>
            </div>
          </div>
          {/* Submit Button */}
          <center>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden shadow-lg hover:text-neutral-300 relative"
              type="submit"
            >
              <span className="relative z-20">Submit</span>
              <span className="absolute inset-0 bg-sky-900 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </motion.button>
          </center>
        </form>
      </motion.div>
    </div>
  );
};

export default UserForm;
