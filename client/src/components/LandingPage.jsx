import React from 'react';
import bg from '../assets/landing.jpg'; // Importing the background image

const LandingPage = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }} // Set the background image here
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 z-10 text-white text-center">
        {/* Hero Section */}
        <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-lg mt-16 md:mt-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Crust Corporation
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Your trusted partner for comprehensive financial services. We offer a range of financial solutions tailored to meet your needs, right at your doorstep.
          </p>
          <a
            href="#learn-more"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Find out how!
          </a>
        </div>

        {/* Image Section (Optional, can be removed since background is set) */}
        {/* <div className="mt-16 md:mt-24">
          <img src={bg} alt="Team Collaboration" className="rounded-lg shadow-xl max-w-full h-auto" />
        </div> */}
      </div>
    </div>
  );
};

export default LandingPage;
