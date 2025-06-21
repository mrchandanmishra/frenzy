
function Stats() {
  return (
    <section className="relative py-16 overflow-hidden mt-[50px]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-3xl mx-4 sm:mx-6 lg:mx-8"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Weekly Fees */}
          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:bg-gray-800/60">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">Weekly Fees</h3>
                </div>
              </div>
              <div className="flex items-center space-x-1 bg-gray-800/60 rounded-lg px-2 py-1">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-gray-400 text-xs">15m</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">7.9 SOL</span>
              </div>
              <div className="text-gray-500 text-sm text-left">$1,097</div>
            </div>
          </div>

          {/* Market Cap */}
          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300 hover:bg-gray-800/60">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium ">Market Cap</h3>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">$776,345</span>
              </div>
              <div className="text-gray-500 text-sm text-left">Fully Diluted</div>
            </div>
          </div>

          {/* Token Price */}
          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:bg-gray-800/60">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">Token Price</h3>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">$0.000776</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414L10 19.414l-4.707-5.707a1 1 0 011.414-1.414L10 15.586l3.293-3.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-red-400 text-sm font-medium">-15.2% 24h</span>
              </div>
            </div>
          </div>

          {/* Volume 24h */}
          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300 hover:bg-gray-800/60">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">Volume 24h</h3>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">$47,218</span>
              </div>
              <div className="text-gray-500 text-sm text-left">All POL Pools Combined</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Stats;