import { Span } from "next/dist/trace";
import React from "react";

const timelineData = [
  {
    text: "Your website is your own digital asset, and you own it completely.",
    icon: "/symbolmedigo.png",
  },
  {
    text: "We send you leads via WhatsApp instantly using automation.",
    icon: "/symbolmedigo.png",
  },
  {
    text: "We are always ready for a quick meeting.",
    icon: "/symbolmedigo.png",
  },
  {
    text: "We integrate leads into your existing CRM.",
    icon: "/symbolmedigo.png",
  },
  {
    text: "We send you monthly reports to track performance.",
    icon: "/symbolmedigo.png",
  },
  {
    text: "To maintain your integrity, we don’t post anything without your permission.",
    icon: "/symbolmedigo.png",
  },
];

const Whymedigo = () => {
  return (
    <div className="w-full bg-gray-100 py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
      Why is <span className="uppercase  font-semibold leading-tight mb-2 bg-gradient-to-r from-teal-400 to-purple-600 text-transparent bg-clip-text">MediGo Digital</span> the Right Healthcare <br></br> Digital Marketing Agency for You?
      </h2>
      <div className="relative max-w-4xl mx-auto">
        {/* <div className="border-l-4 border-green-500 absolute left-1/2 transform -translate-x-1/2 h-full hidden sm:block"></div> */}
        <div className="flex flex-col space-y-8">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="w-16 h-16 bg-white border-2 border-green-500 rounded-full flex items-center justify-center shadow-lg">
                <img src={item.icon} alt="icon" className="w-10 h-10" />
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center sm:text-left">
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whymedigo;

