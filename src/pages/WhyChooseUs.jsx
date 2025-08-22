export default function WhyChooseUs() {
  return (
    <div className="bg-[#FFF7E2] py-16 px-6 md:px-16 mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#3B5D50]  text-center">
        Why Doctors Choose Us?
      </h2>
      <p className="text-center text-gray-700 text-sm mb-40">
        Unlock the benefits of Smarter Healthcare Management and Patient Care
      </p>

      <div className="flex flex-col gap-20">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start w-full">
          {/* Left Side (SVG) */}
          <div className="flex-1 flex items-center justify-center mt-0 translate-y-6 md:-translate-y-16 relative">
            <img
              src="/images/Phone.svg"
              alt="Instant Free Call"
              className="relative w-20 -top-[80px] translate-x-[100px]"
            />
            <img
              src="/images/InstantFreeCall.svg"
              alt="Instant Free Call"
              className="w-100"
            />
          </div>

          {/* Right Side (Text) */}
          <div className="flex-1 mt-8 md:mt-0 md:ml-12 max-w-lg text-center md:text-left">
            <h2 className="text-2xl md:text-3xl  text-green-800 mb-4">
              Instant <span className="text-green-700">FREE</span> 5–Mins Call
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We understand the importance of building trust with your patients.
              That’s why Amrutam offers a{" "}
              <span className="font-semibold">free 5–minute call</span>, helping
              you connect instantly and foster lasting patient relationships
              with ease.
            </p>
          </div>
        </div>

        {/* Why Doctors Choose Us - Block 2 (vice versa) */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch text-center md:text-left  w-full">
          {/* Left Side (Text this time) */}
          <div className="flex-1 mt-8 md:mt-0 md:mr-12 max-w-lg">
            <h2 className="text-2xl md:text-3xl text-green-800 mb-4">
              Forum for Meaningful Connections
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We value you journey in Ayurveda. The Amrutam Fourm helps you
              engage with patients, answer questions, while the "Thoughts"
              section allows you to share deeper Ayurvedic wisdom.
            </p>
          </div>

          {/* Right Side (SVG this time) */}
          <div className="flex-1 flex items-center justify-center mt-0 translate-y-6 md:-translate-y-12">
            <img
              src="/images/MeaningfulConnections.svg"
              alt="Appointment Scheduling"
              className="w-100 h-auto max-w-md md:max-w-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row  items-center md:items-start w-full">
          {/* Left Side (SVG) */}
          <div className="flex-1 flex items-center justify-center mt-0 translate-y-6 md:-translate-y-8 relative">
            <img
              src="/images/SessionMode2.svg"
              alt="Instant Free Call"
              className="absolute top-[50px] right-[60px] md:top-[50px] md:right-[150px] w-1/3 max-w-[80px] transform -translate-y-[60%]"
            />
            <img
              src="/images/SessionMode.svg"
              alt="Instant Free Call"
              className="w-full h-auto max-w-md object-contain"
            />
          </div>

          {/* Right Side (Text) */}
          <div className="flex-1 mt-8 md:mt-0 md:ml-12 max-w-lg text-center md:text-left">
            <h2 className="text-2xl md:text-3xl  text-green-800 mb-4">
              Choose Your Seccion Mode
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Amrutam offers you to connect with patients via Instant Chat,
              Instant Call, or Schedule Video call. Each option offers
              flexibility and personalized care to suit individual needs.
            </p>
          </div>
        </div>

        {/* Why Doctors Choose Us - Block 4 (vice versa) */}
        <div className="flex flex-col md:flex-row items-center  w-full">
          <div className="flex-1 mt-8 md:mt-0 md:mr-12 max-w-lg text-center md:text-left">
            <h2 className="text-2xl md:text-3xl text-green-800 mb-4">
              Smart Wallet
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We understand the need for seamless transactions. With Amrutam
              Wallet, you can easily withdraw payments, and for your security, a
              one-time password is sent to your registered mobile number during
              withdrawals.
            </p>
          </div>

          {/* Right Side (SVG this time) */}

          <div className="flex-1 flex items-center justify-center mt-0 translate-y-6 md:-translate-y-12">
            <img
              src="/images/SmartWallet.svg"
              alt="Appointment Scheduling"
              className="w-full h-auto max-w-md object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:flex-row items-center md:items-start w-full">
          {/* Left Side (SVG) */}
          <div className="flex-1 flex items-center justify-center mt-8 md:-mt-8 md:top-12 relative">
            {/* Main Image */}
            <img
              src="/images/FlexibleWorkTiming.svg"
              alt="Instant Free Call"
              className="w-80 h-auto max-w-md object-contain"
            />

            {/* Floating images */}
            <img
              src="/images/WorkTime.svg"
              alt="Instant Free Call"
              className="absolute top-[0px] left-[280px] w-[80px]  md:left-[380px]  object-contain"
            />

            <img
              src="/images/DrPrena.svg"
              alt="Doctor Prerna Narang"
              className="absolute w-80 top-[250px] left-[170px] w-[300px]  md:top-[200px] md:left-[300px]  object-contain"
            />
          </div>

          {/* Right Side (Text) */}
          <div className="flex-1 mt-8 md:mt-0 md:ml-12 max-w-lg text-center md:text-left">
            <h2 className="text-2xl md:text-3xl  text-green-800 mb-4">
              Flexible Work Timing
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We recognize the importance of managing your time. With the
              availability toggle in the doctor's app. you control when patients
              can book consultations, ensuring a balanced and stress-free
              practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
