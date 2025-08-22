import React from "react";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div>
      <div className="max-w-3xl mx-auto">
        {[
          "What is Amrutam?",
          "How does Amrutam help me grow as a practitioner?",
          "How do I become a part of Amrutam Doctor?",
          "What is Amrutam Global as a platform?",
          "What documents do I need to provide?",
          "Is there a fee to join Amrutam?",
        ].map((q, i) => (
          <div
            key={i}
            className="border-b border-gray-300 py-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800">{q}</span>
              {openIndex === i ? (
                <FiMinus className="text-gray-600" />
              ) : (
                <FiPlus className="text-gray-600" />
              )}
            </div>
            {openIndex === i && (
              <p className="mt-2 text-gray-600 text-sm">
                Here goes the answer for: <span className="italic">{q}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
