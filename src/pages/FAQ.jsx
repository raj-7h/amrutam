import React from "react";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  const isStandalone = location.pathname === "/FAQ";
  return (
    <div
      className={`bg-[#FFF7E2] py-16 px-6 md:px-6 ${
        isStandalone ? "min-h-screen" : ""
      }`}
    >
      <div className="bg-[#FFF7E2] -mt-16 py-16 px-6 md:px-16">
        {/* FAQ Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3B5D50]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 mt-2">
            Find quick answers to common questions to help you navigate the app
            and its features easily.
          </p>
        </div>
        {/* Accordion (FAQ) */}
        <FAQAccordion />
        {/* Button */}
        <div className="text-center mt-8">
          <button className="bg-[#3B5D50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2f4a40] transition">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
