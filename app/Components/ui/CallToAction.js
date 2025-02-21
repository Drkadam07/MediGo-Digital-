import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-green-50 py-10 px-5 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto rounded-xl">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="/assets/healthcare-cta.png" alt="Healthcare CTA" className="max-w-full" />
      </div>
      
      {/* Right Side - Text and Form */}
      <div className="w-full md:w-1/2 text-center md:text-left px-5">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Ready to stand out from the crowd?</h2>
        <p className="text-gray-600 mb-5">Let our healthcare marketing experts help you elevate your practice</p>
        
        {/* Form */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2"
          />
          <input
            type="text"
            placeholder="Type Your Number"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2"
          />
        </div>
        
        {/* Button */}
        <button className="mt-4 bg-blue-800 text-white px-6 py-3 rounded-lg font-medium w-full sm:w-auto hover:bg-blue-900">
          Request a Call Back!
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
