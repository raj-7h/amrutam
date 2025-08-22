import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const isStandalone = location.pathname === "/Testimonials";
  return (
    <div
      className={`bg-[#FFF7E2] py-16 px-6 md:px-16 ${
        isStandalone ? "min-h-screen" : ""
      }`}
    >
      <div className="bg-[#FFF7E2] py-16 px-6 md:px-16 ">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3B5D50]">
            What other Ayurvedic Doctors are Saying
          </h2>
          <p className="text-gray-700 mt-2">
            Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  items-center">
          {/* Testimonial 1 */}
          <motion.img
            src="/images/DrRating1.svg"
            alt="Doctor Rating 1"
            className="w-full h-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Testimonial 2 (popped out a bit more by default) */}
          <motion.img
            src="/images/DrRating2.svg"
            alt="Doctor Rating 2"
            className="w-full h-auto scale-105"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Testimonial 3 */}
          <motion.img
            src="/images/DrRating3.svg"
            alt="Doctor Rating 3"
            className="w-full h-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
