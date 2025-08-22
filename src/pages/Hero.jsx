import React from "react";

const Hero = () => {
  const isStandalone = location.pathname === "/Hero";
  return (
    <div
      className={`bg-[#FFF7E2] py-16 px-6 md:px-16 ${
        isStandalone ? "min-h-screen" : ""
      }`}
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between -mx-6 md:-mx-16 px-6 -mt-12 md:px-16 py-12 bg-gradient-to-r from-[#ffe6a5] to-[#fff6dd]">
        {/* Left column */}
        <div className="flex-1 flex flex-col items-start mb-10 md:mb-0 md:mr-8">
          <p className="text-sm  mb-2">Namaste, Welcome to Amrutam</p>
          <h1 className="text-4xl md:text-5xl mb-4 leading-tight">
            <span className="font-bold text-black">Join Amrutam</span> –{" "}
            <span className="font-bold text-[#3B5D50]">Grow Your Practice</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Connect with more patients, set your own schedule, and grow your
            Ayurvedic practice effortlessly.
          </p>
          <button className="bg-[#3B5D50] text-white rounded-md px-6 py-3 font-semibold hover:bg-[#2f4a40] transition mb-6">
            Join Now
          </button>
          <div className="flex items-center space-x-12">
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold">500+</span>
              <span className="text-gray-600 text-sm">
                Average Active <br />
                Users
              </span>
            </div>
            <div className="h-10 w-[1px] bg-gray-300"></div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold">40+</span>
              <span className="text-gray-600 text-sm">
                Average daily <br />
                free calls
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 relative flex items-center justify-center">
          <img src="../images/Hero.svg" alt="Doctors" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
