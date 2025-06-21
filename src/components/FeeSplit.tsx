import React from 'react';


function FeeSplit() {
  const feeData = [
    {
      percentage: 72,
      title: "Top 25 Contributors",
      description: "Weekly rewards for the loudest voices",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-400/20 to-orange-500/20"
    },
    {
      percentage: 18,
      title: "Kaito Stakers",
      description: "sKAITO token holders earn yield",
      icon: "🔥",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-400/20 to-red-500/20"
    },
    {
      percentage: 10,
      title: "Creator Fund",
      description: "Supporting platform development",
      icon: "⚡",
      color: "from-yellow-500 to-yellow-400",
      bgColor: "from-yellow-500/20 to-yellow-400/20"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-3xl mx-4 sm:mx-6 lg:mx-8"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Fee Split <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Distribution</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every swap generates a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">4% fee</span> that gets distributed weekly to reward the loudest contributors
          </p>
        </div>

        {/* Main Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Circular Chart */}
          <div className="flex items-center justify-center">
            <div className="relative">
              
              {/* Main Circle */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-4 border-gray-700/50"></div>
                
                {/* Progress Segments */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  {/* 72% segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="8"
                    strokeDasharray="160 222"
                    strokeDashoffset="0"
                    className="animate-draw-circle"
                    style={{ animationDelay: '0.5s' }}
                  />
                  {/* 18% segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="8"
                    strokeDasharray="40 342"
                    strokeDashoffset="-160"
                    className="animate-draw-circle"
                    style={{ animationDelay: '1s' }}
                  />
                  {/* 10% segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="url(#gradient3)"
                    strokeWidth="8"
                    strokeDasharray="22 360"
                    strokeDashoffset="-200"
                    className="animate-draw-circle"
                    style={{ animationDelay: '1.5s' }}
                  />
                  
                  {/* Gradients */}
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FB923C" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EAB308" />
                      <stop offset="100%" stopColor="#FACC15" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                      4%
                    </div>
                    <div className="text-gray-300 text-lg font-semibold">Swap Fee</div>
                    <div className="text-gray-400 text-sm">Per Transaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Breakdown Cards */}
          <div className="space-y-6">
            {feeData.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative flex items-center space-x-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-2xl border border-gray-700/50">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                        {item.percentage}%
                      </div>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 bg-gray-800/50 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out animate-progress-bar`}
                    style={{ 
                      width: `${item.percentage}%`,
                      animationDelay: `${index * 0.5 + 2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-black font-bold">
                  1
                </div>
                <h4 className="text-lg font-semibold text-white">Trade LOUD</h4>
                <p className="text-gray-400 text-sm">Every swap on LOUD/SOL or LOUD/USDT generates a 4% fee</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h4 className="text-lg font-semibold text-white">Fees Accumulate</h4>
                <p className="text-gray-400 text-sm">All fees are collected in a pool throughout the week</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center text-black font-bold">
                  3
                </div>
                <h4 className="text-lg font-semibold text-white">Weekly Distribution</h4>
                <p className="text-gray-400 text-sm">Rewards are distributed every week to contributors in SOL</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800/50">
              <p className="text-gray-400 text-sm">
                <span className="text-orange-400 font-medium">Note:</span> Fee distribution mechanics are experimental and may be adjusted based on community feedback and system performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeeSplit;