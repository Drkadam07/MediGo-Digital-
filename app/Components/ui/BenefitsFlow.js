import React from "react";
const benefits = [
  { text: "Get Ready For", icon: '/benefits/medigo5.png', highlight: true },
  { text: "More Patient Bookings", icon: "/benefits/medigo1.png" },
  { text: "Stronger Online Reputation", icon: "/benefits/medigo2.png" },
  { text: "Higher Search Rankings", icon: "/benefits/medigo3.png" },
  { text: "Increased Conversions", icon: "/benefits/medigo4.png" },
];

const BenefitCard = ({ text, icon, highlight }) => (
  <div
    className={`relative flex flex-col items-center w-56 transition-all transform hover:scale-105 ${
      highlight
        ? "bg-gradient-to-r from-white via-[#add8e6] to-[#f8d7da] text-gray-800 py-3 px-5 rounded-full hover:shadow-[0_0_20px_#3b85f6] animate-glow"
        : "bg-white text-gray-800 shadow-lg rounded-xl p-5 hover:shadow-[0_0_15px_#f87171]"
    }`}
  >
    <div
      className={`p-3 rounded-full ${
        highlight ? " text-blue-600" : "bg-red-100 text-red-600"
      }`}
    >
      <img
        src={icon}
        alt={text}
        className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
      />
    </div>
    <span
      className={`font-semibold mt-2 text-center ${
        highlight ? "text-gray-800 text-sm" : "text-gray-800"
      }`}
    >
      {text}
    </span>
    <div className="absolute bottom-[-12px] w-5 h-5 bg-gradient-to-r from-teal-400 to-purple-600 rounded-full animate-pulse"></div>
  </div>
);

const BenefitsFlow = () => {
  return (
    <div className="md:hidden lg:block bg-gradient-to-b from-white via-teal-100 to-emerald-200 p-8 rounded-xl shadow-xl w-full">
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="absolute top-[50%] left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-purple-600 hidden lg:block"></div>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} text={benefit.text} icon={benefit.icon} highlight={benefit.highlight} />
        ))}
      </div>
    </div>
  );
};

export default BenefitsFlow;
