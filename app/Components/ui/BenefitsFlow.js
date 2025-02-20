import React from "react";
import { Smartphone, Monitor, BarChart, Users, Rocket } from "lucide-react";

const benefits = [
  { text: "Get Ready For", icon: <Rocket size={18} />, highlight: true },
  { text: "More Patient Bookings", icon: <Smartphone size={24} /> },
  { text: "Stronger Online Reputation", icon: <Monitor size={24} /> },
  { text: "Higher Search Rankings", icon: <BarChart size={24} /> },
  { text: "Increased Conversions", icon: <Users size={24} /> },
];

const BenefitCard = ({ text, icon, highlight }) => (
  <div
    className={`relative flex flex-col items-center ${
      highlight ? "bg-blue-600 text-white py-2 px-4 rounded-full shadow-md" : "bg-white text-gray-800 shadow-lg rounded-xl p-5"
    } w-56 transition-all hover:shadow-2xl`}
  >
    <div
      className={`p-3 rounded-full ${
        highlight ? "bg-white text-blue-600" : "bg-red-100 text-red-600"
      }`}
    >
      {icon}
    </div>
    <span
      className={`font-semibold mt-2 text-center ${highlight ? "text-white text-sm" : "text-gray-800"}`}
    >
      {text}
    </span>
    {/* Timeline Dot */}
    <div className="absolute bottom-[-12px] w-5 h-5 bg-red-500 rounded-full animate-pulse"></div>
  </div>
);

const BenefitsFlow = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-red-50 p-8 rounded-xl shadow-xl w-full">
      {/* Timeline Container */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Timeline Line */}
        <div className="absolute top-[50%] left-0 right-0 h-1 bg-red-300 hidden lg:block"></div>

        {benefits.map((benefit, index) => (
          <BenefitCard key={index} text={benefit.text} icon={benefit.icon} highlight={benefit.highlight} />
        ))}
      </div>
    </div>
  );
};

export default BenefitsFlow;
