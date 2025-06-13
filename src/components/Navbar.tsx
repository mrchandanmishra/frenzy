import React, { useState } from "react";
import logo from "../assets/image/frenzy_logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black px-6 py-3 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Left - Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-white text-xl font-bold text-left leading-tight">
              Loud
            </div>
            <div className="text-gray-400 text-sm leading-tight">
              The loudest always win
            </div>
          </div>
        </div>

        {/* Center - Token Info Section (Desktop only) */}
        <div className="hidden md:flex items-center bg-gray-800 rounded-full px-4 py-2.5">
          <div className="flex items-center space-x-2">
            {/* Token Icon */}
            <div className="w-7 h-7 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Token Info Stacked */}
            <div className="flex flex-col">
              <div className="text-white font-semibold text-sm leading-tight">
                $LOUD
              </div>
              <div className="text-gray-400 text-xs leading-tight">Token</div>
            </div>
            {/* Vertical Divider */}
            <div className="w-px h-6 bg-gray-600 mx-2"></div>
            {/* Contract Address */} {" "}
            <div className="text-white text-sm font-mono">EJZJ...fWvd</div>
            {/* Copy Icon */}
            <button
              onClick={() => navigator.clipboard.writeText("EJZJ...fWvd")}
              className="text-gray-400 hover:text-white transition-colors p-1 bg-[#333300]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
                 
              </svg>
            </button>
            {/* Chart Icon */}
            <button className="text-gray-400 hover:text-white transition-colors p-1 bg-[#333300]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </button>
            {/* Green 22 Badge */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1.5 rounded-full text-sm font-bold">
              22
            </div>
          </div>
        </div>

        {/* Right - Connect Button (Desktop only) */}
        <div className="hidden md:flex items-center">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-6 py-2.5 rounded-full font-semibold transition-all duration-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>Connect</span>
          </button>
        </div>

        {/* Mobile Menu Button (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="pt-4 pb-3 space-y-4">
          {/* Mobile Token Info */}
          <div className="bg-gray-800 rounded-full px-4 py-2">
            <div className="flex items-center space-x-3 justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                <div className="text-white font-semibold text-sm">$LOUD</div>
              </div>

              <div className="text-gray-400 text-sm hidden">Token</div>
              <div className="text-white text-sm font-mono">EJZJ...fWvd</div>

              <button className="text-gray-400 hover:text-white transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>

              <button className="text-gray-400 hover:text-white transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </button>

              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2.5 py-1 rounded-full text-sm font-bold">
                22
              </div>
            </div>
          </div>

          {/* Mobile Connect Button */}
          <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-6 py-2.5 rounded-full font-semibold transition-all duration-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>Connect</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
