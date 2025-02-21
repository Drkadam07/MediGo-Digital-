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
    answer: "",
  },
  {
    question: "How do I choose a healthcare marketing agency?",
    answer: "",
  },
  {
    question: "What is the cost of hiring a healthcare marketing agency?",
    answer: "",
  },
  {
    question: "What services does MediGo Digital offer?",
    answer: "",
  },
  {
    question: "How does MediGo Digital help healthcare providers improve their online presence?",
    answer: "",
  },
  {
    question: "What kind of results can I expect from healthcare digital marketing with MediGo Digital?",
    answer: "",
  },
  {
    question: "Who can benefit from MediGo Digital’s services?",
    answer: "",
  },
  {
    question: "Why should I choose MediGo Digital for healthcare digital marketing?",
    answer: "",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        FAQ’s About Digital Marketing for Healthcare
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className={`w-full text-left flex justify-between items-center p-4 text-lg font-medium ${
                openIndex === index ? "bg-teal-500 text-white" : "bg-teal-400 text-black"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
