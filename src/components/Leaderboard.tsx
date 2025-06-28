// import React from 'react';


function Leaderboard() {
  const leaderboardData = [
    {
      rank: 1,
      user: "Deebs DeFi",
      handle: "@Deebs_DeFi",
      avatar: "https://via.placeholder.com/40/FF6B6B/FFFFFF?text=DD",
      verified: true,
      followers: "45.6K",
      following: "810",
      mindshare: "2.625%",
      change: "+1.043%",
      earnings: "0.5 SOL",
      earningsUsd: "$74",
      isPositive: true,
      badge: "👑"
    },
    {
      rank: 2,
      user: "SALAMANDER",
      handle: "@SALAMANDER12_",
      avatar: "https://via.placeholder.com/40/4ECDC4/FFFFFF?text=SA",
      verified: true,
      followers: "15.5K",
      following: "572",
      mindshare: "2.171%",
      change: "+1.193%",
      earnings: "0.4 SOL",
      earningsUsd: "$61",
      isPositive: true,
      badge: "⚡"
    },
    {
      rank: 3,
      user: "Faded",
      handle: "@yourfadedwealth",
      avatar: "https://via.placeholder.com/40/95A5A6/FFFFFF?text=FA",
      verified: true,
      followers: "40.5K",
      following: "1.4K",
      mindshare: "1.863%",
      change: "-0.037%",
      earnings: "0.4 SOL",
      earningsUsd: "$52",
      isPositive: false,
      badge: "🥉"
    },
    {
      rank: 4,
      user: "Rippy",
      handle: "@rippyfied",
      avatar: "https://via.placeholder.com/40/F1C40F/FFFFFF?text=RI",
      verified: true,
      followers: "5.5K",
      following: "1.1K",
      mindshare: "1.833%",
      change: "+0.797%",
      earnings: "0.4 SOL",
      earningsUsd: "$51",
      isPositive: true,
      badge: ""
    },
    {
      rank: 5,
      user: "Nazoku.eth",
      handle: "@Nazo_ku",
      avatar: "https://via.placeholder.com/40/E74C3C/FFFFFF?text=NA",
      verified: true,
      followers: "10.7K",
      following: "31",
      mindshare: "1.520%",
      change: "+0.675%",
      earnings: "0.3 SOL",
      earningsUsd: "$43",
      isPositive: true,
      badge: ""
    },
    {
      rank: 6,
      user: "Tut",
      handle: "@Tuteth_",
      avatar: "https://via.placeholder.com/40/E67E22/FFFFFF?text=TU",
      verified: true,
      followers: "24.3K",
      following: "796",
      mindshare: "1.435%",
      change: "-0.202%",
      earnings: "0.3 SOL",
      earningsUsd: "$40",
      isPositive: false,
      badge: ""
    },
    {
      rank: 7,
      user: "Nick",
      handle: "@NicholasKGarvin",
      avatar: "https://via.placeholder.com/40/9B59B6/FFFFFF?text=NI",
      verified: true,
      followers: "8.9K",
      following: "568",
      mindshare: "1.348%",
      change: "+1.109%",
      earnings: "0.3 SOL",
      earningsUsd: "$38",
      isPositive: true,
      badge: ""
    },
    {
      rank: 8,
      user: "Splin Teron",
      handle: "@splinteron",
      avatar: "https://via.placeholder.com/40/34495E/FFFFFF?text=SP",
      verified: true,
      followers: "66.3K",
      following: "689",
      mindshare: "1.296%",
      change: "+0.618%",
      earnings: "0.3 SOL",
      earningsUsd: "$35",
      isPositive: true,
      badge: ""
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden mt-[50px]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-3xl mx-4 sm:mx-6 lg:mx-8"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Leaderboard Section */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <h2 className="text-2xl font-bold text-white">
                    Who's the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Loudest?</span>
                  </h2>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="bg-gray-800/60 border border-gray-700/50 rounded-xl px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 w-64"
                    />
                    <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Kaito feed updates every hour</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>History</span>
                  </div>
                </div>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 mb-4 pb-3 border-b border-gray-800/50">
                <div className="col-span-1 text-gray-400 text-sm font-medium">RANK</div>
                <div className="col-span-4 text-gray-400 text-sm font-medium">USER</div>
                <div className="col-span-2 text-gray-400 text-sm font-medium text-center">MINDSHARE</div>
                <div className="col-span-2 text-gray-400 text-sm font-medium text-center">CHANGE</div>
                <div className="col-span-3 text-gray-400 text-sm font-medium text-right">EARNINGS</div>
              </div>

              {/* Scrollable User List */}
              <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
                {leaderboardData.map((user) => (
                  <div key={user.rank} className="grid grid-cols-12 gap-4 items-center py-4 hover:bg-gray-800/30 rounded-xl transition-colors duration-200 group">
                    
                    {/* Rank */}
                    <div className="col-span-1 flex items-center">
                      <div className="flex items-center space-x-2">
                        {user.rank <= 3 && (
                          <span className="text-lg">{user.badge}</span>
                        )}
                        <span className={`font-bold ${user.rank === 1 ? 'text-yellow-400' : user.rank === 2 ? 'text-gray-300' : user.rank === 3 ? 'text-orange-400' : 'text-gray-400'}`}>
                          {user.rank}
                        </span>
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="col-span-4 flex items-center space-x-3">
                      <img 
                        src={user.avatar} 
                        alt={user.user}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-semibold">{user.user}</span>
                          {user.verified && (
                            <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                          <div className="flex items-center space-x-2 text-gray-400 text-xs">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>{user.followers}</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                            </svg>
                            <span>{user.following}</span>
                          </div>
                        </div>
                        <div className="text-gray-400 text-left text-sm">{user.handle}</div>
                      </div>
                    </div>

                    {/* Mindshare */}
                    <div className="col-span-2 text-center">
                      <span className="text-white font-semibold text-lg">{user.mindshare}</span>
                    </div>

                    {/* Change */}
                    <div className="col-span-2 text-center">
                      <div className={`flex items-center justify-center space-x-1 ${user.isPositive ? 'text-orange-400' : 'text-red-400'}`}>
                        <svg className={`w-3 h-3 ${user.isPositive ? 'rotate-0' : 'rotate-180'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{user.change}</span>
                      </div>
                    </div>

                    {/* Earnings */}
                    <div className="col-span-3 text-right">
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-bold text-lg">
                        {user.earnings}
                      </div>
                      <div className="text-gray-400 text-sm">{user.earningsUsd}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 sticky top-8">
              
              {/* What is Loud Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">What is Loud?</h3>
                  <p className="text-orange-400 text-sm">@stayloudio</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Loud is an experiment that explores perpetual incentives for social engagement. The core idea: what happens when you reward people for talking about a coin, <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">forever?</span>
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Every week, trading volume generates swap fees that get distributed to the top contributors of Loud's mindshare - creating a sustainable cycle of engagement and rewards.
                </p>
              </div>

              {/* How it Works */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-white font-semibold">How it Works:</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Tweet about Loud to earn mindshare</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Top contributors earn rewards each week</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Rewards come from actual trading fees and are distributed in SOL</p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 mb-6">
                <p className="text-gray-400 text-sm">
                  <span className="text-orange-400 font-medium">Note:</span> You need to register your wallet to claim fees.
                </p>
              </div>

              {/* Follow Button */}
              <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <span>Follow Loud</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Leaderboard;