export default function AppDownload() {
  return (
    <section className="bg-[ #ffe29a ] py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3B5D50] leading-snug mb-4">
          Get Started Today – <br /> Download the App Now!
        </h2>
        <p className="text-gray-700 mb-8">
          Simplify consultations, manage patients, and grow your practice— all
          in one place.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 md:mb-8">
          <div className="flex items-center border border-[#3B5D50] rounded-lg px-4 py-3 text-[#3B5D50]">
            <img src="/images/Leaf.svg" alt="Leaf" className="w-5 h-5 mr-2" />
            Build Trust and Community with Forum
          </div>
          <div className="flex items-center border border-[#3B5D50] rounded-lg px-4 py-3 text-[#3B5D50]">
            <img
              src="/images/Dollar.svg"
              alt="Dollar"
              className="w-5 h-5 mr-2"
            />
            Earn More with Pay Per Conversation
          </div>
          <div className="flex items-center border border-[#3B5D50] rounded-lg px-4 py-3 text-[#3B5D50]">
            <img src="/images/Call.svg" alt="Call" className="w-5 h-5 mr-2" />
            Attract Patients with 5–Minute Free Call
          </div>
          <div className="flex items-center border border-[#3B5D50] rounded-lg px-4 py-3 text-[#3B5D50]">
            <img
              src="/images/Wallet.svg"
              alt="Wallet"
              className="w-5 h-5 mr-2"
            />
            Instant Access to Your Earnings with Wallet
          </div>
        </div>

        {/* Store Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            type="button"
            className="w-40 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src="/images/GooglePlay.svg"
              alt="Google Play"
              className="w-40"
            />
          </button>

          <button
            type="button"
            className="w-40 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img src="/images/AppStore.svg" alt="App Store" className="w-40" />
          </button>
        </div>
      </div>

      {/* Right Image (Phone Mockup) */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center relative">
        <img
          src="/images/IphoneDownload.svg"
          alt="App Preview"
          className="w-80 md:w-[28rem] relative z-25 mt-12 md:-mt-[210px] drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
