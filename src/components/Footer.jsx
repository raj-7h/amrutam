import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E2E2C4] text-gray-800 py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#2f4a40] mb-4">
            A M R U T A M
          </h2>
          <h3 className="text-lg text-[#2f4a40] mb-2">Get in touch</h3>
          <p className="mb-2">support@amrutam.global</p>
          <p className="mb-2">
            Amrutam Pharmaceuticals Pvt Ltd., <br />
            chitragupt ganj, Nai Sadak, Lashkar, <br />
            Gwalior – 474001
          </p>
          <p>+91 9713171999</p>
        </div>

        {/* Column 2 - Information Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#2f4a40] mb-4">
            Information
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy for Mobile App</a>
            </li>
            <li>
              <a href="#">Shipping and Return Policy</a>
            </li>
            <li>
              <a href="#">International Delivery</a>
            </li>
            <li>
              <a href="#">For Business, Hotels and Resorts</a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-[#2f4a40] mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a href="#">
              <FaFacebookF className="text-2xl text-[#2f4a40] hover:text-[#3B5D50]" />
            </a>
            <a href="#">
              <FaInstagram className="text-2xl text-[#2f4a40] hover:text-[#3B5D50]" />
            </a>
            <a href="#">
              <FaYoutube className="text-2xl text-[#2f4a40] hover:text-[#3B5D50]" />
            </a>
            <a href="#">
              <FaTwitter className="text-2xl text-[#2f4a40] hover:text-[#3B5D50]" />
            </a>
            <a href="#">
              <FaLinkedinIn className="text-2xl text-[#2f4a40] hover:text-[#3B5D50]" />
            </a>
            <a href="#">
              <FaPinterestP className="text-2xl text-[#2f4a40] hover:text-[#3B5D50]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
