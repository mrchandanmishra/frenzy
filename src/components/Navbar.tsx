import { useState } from 'react';
import logo from '../assets/images/logo.svg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tokenAddress = "0xEJZJt1234567890abcdef1234567890fWvd"; // Full address to be copied

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress).then(() => {
      console.log("Copied:", tokenAddress);
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b-2 border-orange-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* LEFT SECTION */}
          <div className="flex items-center space-x-3 flex-shrink-0">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-white text-left font-bold text-xl leading-tight">Loud</h1>
              <p className="text-gray-400 text-sm leading-tight">The loudest always win</p>
            </div>
          </div>

          {/* CENTER SECTION - DESKTOP */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-md mx-8">
            <div className="flex items-center space-x-3 bg-gray-800/80 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-gray-700/50 w-full">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
              <div className="flex flex-col min-w-0 flex-shrink-0">
                <span className="text-white font-bold text-sm">$LOUD</span>
                <span className="text-gray-400 text-xs">Token</span>
              </div>
              <div className="w-px h-8 bg-gray-700 flex-shrink-0"></div>
              <div className="flex items-center space-x-2 min-w-0 flex-1">
                <span className="text-gray-300 text-sm font-mono truncate">EJZJt...fWvd</span>
                <div className="flex items-center space-x-1 flex-shrink-0">
                  <button onClick={handleCopy} className="text-orange-400 transition-colors p-1.5 bg-gray-800 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="text-orange-400 transition-colors p-1.5 bg-gray-800 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </button>
                  <button className="text-orange-400 transition-colors p-1.5 bg-gray-800 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <button className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-red-500 text-black font-bold px-6 py-2.5 rounded-xl transition-all duration-200 hover:scale-105">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span>Connect</span>
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2 bg-gray-800 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="border-t border-gray-800 pt-4 pb-4">
            <div className="mb-4">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 mx-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-black font-bold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-bold text-base block">$LOUD</span>
                      <span className="text-gray-400 text-sm">Token</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-300 text-sm font-mono">EJZJt...fWvd</span>
                    <div className="flex space-x-1">
                      <button onClick={handleCopy} className="text-orange-400 transition-colors p-2 bg-gray-800 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                      {/* Keep other buttons unchanged */}
                      <button className="text-orange-400 transition-colors p-2 bg-gray-800 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </button>
                      <button className="text-orange-400 transition-colors p-2 bg-gray-800 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Connect Button */}
            <div className="px-2">
              <button className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-red-500 text-black font-bold px-6 py-3 rounded-xl transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
