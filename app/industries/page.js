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

    <div className="py-10 px-5 text-center overflow-hidden">
      <h2 className="text-3xl font-semibold mb-6">HealthCare Specialists We Serve</h2>    
      <Industries/>
    </div>
    <div className="mx-10 mt-10">
        <CallToAction/>
      </div>
    </>
  );
};

export default HealthcareSpecialists;
