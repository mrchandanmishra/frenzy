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
    <section className="relative py-12 overflow-hidden mt-[50px]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-3xl mx-4 sm:mx-6 lg:mx-8"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Fee Split <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Distribution</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Every swap generates a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">4% fee</span> distributed weekly
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Left - Compact Circle */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-48 relative">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-2 border-gray-700/50"></div>
                
                {/* Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  {/* 72% segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="6"
                    strokeDasharray="172 240"
                    strokeDashoffset="0"
                    className="transition-all duration-1000 ease-out"
                  />
                  {/* 18% segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="6"
                    strokeDasharray="43 369"
                    strokeDashoffset="-172"
                    className="transition-all duration-1000 ease-out"
                  />
                  {/* 10% segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="url(#gradient3)"
                    strokeWidth="6"
                    strokeDasharray="24 388"
                    strokeDashoffset="-215"
                    className="transition-all duration-1000 ease-out"
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
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-1">
                      4%
                    </div>
                    <div className="text-gray-300 text-sm font-semibold">Swap Fee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle - Compact Cards */}
          <div className="lg:col-span-2 space-y-3">
            {feeData.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {/* Compact Icon */}
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-lg border border-gray-700/50">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <div className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                          {item.percentage}%
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Compact Progress Bar */}
                <div className="mt-3 bg-gray-800/50 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${item.percentage}%`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Note Section */}
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 relative overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-yellow-500/5 rounded-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-start space-x-4">
              {/* Warning Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-2">Important Notice</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Fee distribution mechanics are <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">experimental</span> and may be adjusted based on community feedback and system performance. All participants should be aware of the evolving nature of this reward system.
                </p>
                
                {/* Additional Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-400 text-xs">Weekly distribution cycles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-400 text-xs">Rewards paid in SOL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-400 text-xs">Top 25 contributors eligible</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-400 text-xs">Real-time mindshare tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeeSplit;