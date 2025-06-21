import { useState } from "react";
import Stats from './Stats'

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative min-h-screen bg-black pt-4 overflow-hidden flex items-center w-full">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-yellow-900/20"></div>

        {/* Animated orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-orange-400/30 to-red-500/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-r from-yellow-500/15 to-orange-400/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-gradient-to-r from-red-500/25 to-orange-600/20 rounded-full blur-xl animate-float"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-orange-400/20"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full text-center px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="mb-8 -mt-[10px] flex justify-center items-center gap-4 flex-wrap py-1">
          {/* STAY */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-8xl font-black text-white leading-none">
            STAY
          </h1>

          {/* LOUD with gradient and glow */}
          <div className="relative inline-block">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 leading-none animate-gradient">
              LOUD
            </h1>
            <div className="absolute inset-0 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-orange-400/20 blur-2xl leading-none animate-pulse">
              LOUD
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-2xl text-gray-300 mb-12 w-full px-4 sm:px-12 lg:px-32 leading-relaxed font-medium">
          Rewards distributed to top mindshare contributors weekly,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold">
            forever.
          </span>
        </p>
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-400/10 to-yellow-500/10 backdrop-blur-md border border-orange-400/20 rounded-full px-6 py-3 mb-8 hover:border-orange-400/40 transition-all duration-300">
          <div className="relative">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-orange-300 font-medium">
            The loudest always win
          </span>
          <div className="w-px h-4 bg-orange-400/30"></div>
          <span className="text-gray-300 text-sm">
            Next payout: June 22, 2025
          </span>
        </div>

        {/* Central Visual */}
        {/* <div className="relative mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 w-80 h-80 border-2 border-orange-400/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 w-72 h-72 border border-yellow-500/30 rounded-full animate-spin-reverse"></div>
              <div className="absolute inset-8 w-64 h-64 border border-orange-400/20 rounded-full animate-spin-slow"></div>

              <div className="relative w-80 h-80 bg-gradient-to-br from-gray-900/80 via-black to-gray-900/80 backdrop-blur-sm rounded-full border border-orange-400/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse-glow">
                    <svg
                      className="w-12 h-12 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
                    $1.2M+
                  </div>
                  <div className="text-gray-400">Total Rewards</div>
                </div>

                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-float"></div>
                <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-float-delayed"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-red-500 rounded-full animate-float"></div>
                <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-float-delayed"></div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Buttons */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16 px-4">
          <button className="group relative bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-black font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-400/30 w-full sm:w-auto text-lg">
            <span className="relative z-10">Start Earning Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={handlePlayVideo}
            className="group flex items-center space-x-4 bg-gray-900/50 hover:bg-gray-800/70 backdrop-blur-md text-white font-semibold px-10 py-4 rounded-2xl border border-gray-600/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-lg"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full group-hover:scale-110 transition-transform duration-200">
              {isPlaying ? (
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-black ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
            <span>Watch Demo</span>
          </button>
        </div> */}

        {/* Bottom Stats */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full px-4 sm:px-20 max-w-[1440px] mx-auto">
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-orange-400/30 transition-all duration-300">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
              10K+
            </div>
            <div className="text-gray-400">Active Contributors</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-orange-400/30 transition-all duration-300">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
              24/7
            </div>
            <div className="text-gray-400">Network Active</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-orange-400/30 transition-all duration-300">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
              Weekly
            </div>
            <div className="text-gray-400">Reward Cycles</div>
          </div>
        </div> */}
      <Stats/>
      </div>
    </section>
  );
}

export default Hero;
