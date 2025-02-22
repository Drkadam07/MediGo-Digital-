'use client'
import React from "react";
import CallToAction from "../Components/ui/CallToAction";
import Industries from "../Components/ui/Industries";

const HealthcareSpecialists = () => {
  return (
    <section className="bg-white">
      <div className="py-10 px-5 bg-teal-100 relative overflow-hidden text-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/bghero.webp')] bg-cover bg-center opacity-30"></div>
        </div>
        <h2 className="uppercase text-xl font-semibold md:text-2xl lg:text-3xl  leading-tight mb-6 text-gray-900">
          Healthcare Specialists We Serve
        </h2>
        <Industries />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <CallToAction />
      </div>
    </section>
  );
};

export default HealthcareSpecialists;
