'use client'
import React, { useState } from "react";

const faqs = [
  {
    question: "What is healthcare digital marketing?",
    answer:
      "Healthcare digital marketing involves using various online strategies to promote healthcare services and connect with potential patients. This includes search engine optimization (SEO), social media marketing, pay-per-click (PPC) advertising, content creation, email marketing, and website design and development. The goal is to enhance the online presence of healthcare providers, including doctors, clinics, and hospitals, ensuring they can reach more patients and grow their practice.",
  },
  {
    question: "Why is it important to hire a healthcare digital marketing agency over a traditional agency?",
    answer: "A healthcare-specific digital marketing agency understands the unique challenges and compliance requirements of the industry, ensuring strategies align with medical ethics, HIPAA regulations, and patient engagement best practices.",
  },
  {
    question: "How do I choose a healthcare marketing agency?",
    answer: "Look for agencies with experience in the healthcare industry, proven results, a strong online presence, and client testimonials that reflect their expertise.",
  },
  {
    question: "What is the cost of hiring a healthcare marketing agency?",
    answer: "Costs vary based on services required, campaign complexity, and agency expertise. Most agencies offer customized pricing tailored to client needs.",
  },
  {
    question: "What services does MediGo Digital offer?",
    answer: "MediGo Digital provides SEO, PPC advertising, content marketing, social media management, website development, and reputation management for healthcare providers.",
  },
  {
    question: "How does MediGo Digital help healthcare providers improve their online presence?",
    answer: "We use data-driven strategies, targeted advertising, and content marketing to enhance visibility, attract patients, and build a reputable digital footprint.",
  },
  {
    question: "What kind of results can I expect from healthcare digital marketing with MediGo Digital?",
    answer: "Clients typically see increased website traffic, improved patient engagement, higher appointment bookings, and stronger online reputation over time.",
  },
  {
    question: "Who can benefit from MediGo Digital’s services?",
    answer: "Doctors, clinics, hospitals, telemedicine providers, healthcare startups, and wellness brands looking to grow their digital presence.",
  },
  {
    question: "Why should I choose MediGo Digital for healthcare digital marketing?",
    answer: "Our deep industry knowledge, innovative strategies, and commitment to compliance make us a trusted partner for healthcare professionals.",
  },
  {
    question: "How do I get started with MediGo Digital healthcare digital marketing services?",
    answer: "",
  },
  {
    question: "Why is MediGo Digital one of the leading healthcare digital marketing agency?",
    answer: "",
  },
  {
    question: "Has MediGo Digital been awarded as the best healthcare digital marketing agency?" ,
    answer : " ",
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-purple-50 to-teal-50 min-h-screen p-6">
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="uppercase text-center text-xl font-semibold md:text-2xl lg:text-3xl leading-tight mb-6">
        FAQ’s About Digital Marketing for Healthcare
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-xl shadow-stone-1000/40">
            <button
              className={`w-full text-left flex justify-between items-center p-4 text-lg font-medium  ${
                openIndex === index ? "bg-gradient-to-r from-purple-100 to-teal-100" : "bg-gradient-to-r from-teal-100/50 to-purple-100/50 text-black "
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100/30 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default FAQSection;
