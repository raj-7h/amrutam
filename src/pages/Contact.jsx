export default function Contact() {
  return (
    <section className="bg-[#FFF7E2] py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3B5D50]">
          Let’s Connect
        </h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          We’re here to help you on your wellness journey. Reach out to us for
          any questions, product inquiries, or personalized advice.
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-stretch gap-10">
        {/* Left Side - Image */}
        <div className="flex-1">
          <img
            src="/images/LetsConnect.svg"
            alt="Connect"
            className="rounded-lg shadow-md object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 bg-[#FFF7E2] border border-gray-300 rounded-md p-6 flex flex-col justify-between">
          <form className="space-y-6 h-full">
            {/* Name + Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#3B5D50] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#3B5D50] py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#3B5D50] mb-2">
                  Your Contact Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your number"
                  className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#3B5D50] py-2"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#3B5D50] mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#3B5D50] py-2"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[#3B5D50] mb-2">
                Message (Optional)
              </label>
              <textarea
                rows="3"
                placeholder="Type your message..."
                className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#3B5D50] py-2"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#3B5D50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2f4a40] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
