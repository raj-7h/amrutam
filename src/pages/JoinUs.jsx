export default function JoinUs() {
  return (
    <section className="bg-[#FFF7E2] mt-6 py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3B5D50]">
          Join Our Circle of Care
        </h2>
        <p className="text-gray-700 text-base mt-2">
          Becoming a part of Amrutam is simple
        </p>
      </div>

      {/* Steps + Image */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-10">
        {/* Steps */}
        <div className="flex-1 space-y-4">
          <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <p className="font-semibold text-[#3B5D50]">
              Step 1: Get your referral code
            </p>
            <p className="text-sm text-gray-600">
              Contact us to receive your unique referral code.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <p className="font-semibold text-[#3B5D50]">
              Step 2: Register on Amrutam
            </p>
            <p className="text-sm text-gray-600">
              Sign up on the Amrutam Doctors app or website to join our
              specialist network.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <p className="font-semibold text-[#3B5D50]">Step 3: Complete KYC</p>
            <p className="text-sm text-gray-600">
              Fill in your details and upload the required documents for
              verification.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <p className="font-semibold text-[#3B5D50]">
              Step 4: Start consulting
            </p>
            <p className="text-sm text-gray-600">
              Once verified, begin offering consultations and helping patients.
            </p>
          </div>
        </div>

        {/* Right Illustration (SVG) */}
        <div className="relative flex items-center justify-center">
          {/* Yellowish Blob Texture */}
          <div className="absolute -top-10 -left-10 w-[120%] h-[120%] bg-[#FFF7E2] rounded-full blur-3xl opacity-70 z-0"></div>

          {/* Background SVG (the card shape behind image) */}
          <img
            src="/images/Background.svg"
            alt="Background Shape"
            className="relative z-10"
          />

          {/* Foreground Image (main illustration) */}
          <img
            src="/images/ForegroundImage.svg"
            alt="Join Circle Illustration"
            className="absolute z-20 top-20"
          />
        </div>
      </div>

      {/* Tabs (Consultations, Payment, Schedule) */}
      <div className="flex justify-center mt-[100px] space-x-4 mb-12">
        <button className="px-6 py-2 rounded-lg bg-[#3B5D50] text-white font-medium">
          Consultations
        </button>
        <button className="px-6 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium">
          Payment withdrawal
        </button>
        <button className="px-6 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium">
          Schedule
        </button>
      </div>

      {/* Mobile Screens */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
        {/* Phone 1 */}
        <div className="flex flex-col items-center">
          <p className="mt-4 text-green-800 font-semibold mb-4">
            Value Your Practice
          </p>
          <img
            src="/images/ValueYourPractice.svg"
            alt="Value Your Practice"
            className="w-48"
          />
        </div>

        {/* Phone 2 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/HealingJourney.svg"
            alt="Today's Healing Journey"
            className="w-48"
          />
          <p className="mt-4 text-green-800 font-semibold mb-4">
            Today&apos;s Healing Journey
          </p>
        </div>

        {/* Phone 3 */}
        <div className="flex flex-col items-center">
          <p className="mt-4 text-green-800 font-semibold mb-4">
            Consultation Details
          </p>
          <img
            src="/images/ConsultationDetails.svg"
            alt="Consultation Details"
            className="w-48"
          />
        </div>
      </div>

      {/* Join Now Button */}
      <div className="text-center">
        <button className="bg-[#3B5D50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2f4a40] transition">
          Join Now
        </button>
      </div>
    </section>
  );
}
