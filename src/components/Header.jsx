import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#373636] border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-center gap-4 px-4 py-2">
          <p className="text-sm text-white flex items-center">
            Register Yourself as an Amrutam Doctor
          </p>
          <Link
            to="/JoinUs"
            className="flex items-center px-8 py-1.5 bg-[#3B5D50] text-white rounded-md font-semibold text-sm tracking-wide shadow-sm transition-colors duration-200 hover:bg-[#274037] hover:text-white"
          >
            <FaUserDoctor className="mr-2" />
            Join Now
          </Link>
        </div>
      </div>

      <header className="bg-[#FFF7E2] h-20 flex items-center relative z-10">
        <div className="w-full max-w-7xl mx-auto flex items-center px-4">
          <Link
            to="/"
            aria-label="Amrutam Home"
            className="flex items-center mr-8"
          >
            <span className="text-[#3B5D50] font-bold text-xl tracking-wide">
              A M R U T A M
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="flex-1 flex justify-center">
            <nav aria-label="Primary" className="hidden md:block">
              {/* desktop links */}
            </nav>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 ml-4 z-20"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu outside header to stay in flow */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#FFF7E2] w-full px-4 py-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <HashLink
                smooth
                to="/#features"
                className="block px-2 py-2 text-gray-900 font-medium uppercase hover:text-[#3B5D50]"
              >
                About Us
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#joinus"
                className="block px-2 py-2 text-gray-900 font-medium uppercase hover:text-[#3B5D50]"
              >
                Onboarding
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#faq"
                className="block px-2 py-2 text-gray-900 font-medium uppercase hover:text-[#3B5D50]"
              >
                FAQ
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#testimonials"
                className="block px-2 py-2 text-gray-900 font-medium uppercase hover:text-[#3B5D50]"
              >
                Testimonials
              </HashLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
