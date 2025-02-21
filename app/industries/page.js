'use client'
import React, { useState } from "react";
import CallToAction from "../Components/ui/CallToAction";
import Industries from "../Components/ui/Industries";

const specialists = [
  { name: "Oncologists", image: "/assets/oncologist.jpg" },
  { name: "Ophthalmologist", image: "/assets/ophthalmologist.jpg" },
  { name: "Gastroenterologists", image: "/assets/gastroenterologist.jpg" },
  { name: "Doctors", image: "/assets/doctors.jpg" },
  { name: "Physiotherapists", image: "/assets/physiotherapist.jpg" },
];

const HealthcareSpecialists = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
    <Industries/>
    <div className="py-10 px-5 text-center overflow-hidden">
      <h2 className="text-3xl font-semibold mb-6">HealthCare Specialists We Serve</h2>
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex space-x-6 ${isPaused ? '' : 'animate-scroll'}`} 
        >
          {specialists.concat(specialists).map((specialist, index) => (
            <div
              key={index}
              className="min-w-[200px] md:min-w-[250px] bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => alert(`Clicked on ${specialist.name}`)} 
            >
              <img src={specialist.image} alt={specialist.name} className="w-full h-40 object-cover" />
              <h3 className="text-center bg-blue-800 text-white py-2">{specialist.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            display: flex;
            white-space: nowrap;
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
    </div>
    <div className="mx-10 mt-10">
        <CallToAction/>
      </div>
    </>
  );
};

export default HealthcareSpecialists;
