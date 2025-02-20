import "./footer.css";

const QuoteForm = () => {
  return (
    <div className="bg-white ">
      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 bottom-40">
        <h2 className="text-center text-2xl font-bold text-black mb-4">
          TO REQUEST A QUOTE PLEASE FILL OUT THE FORM
        </h2>
        <p className="text-center text-gray-600 mb-8">
          At Muhiris, we believe in the power of community and creativity
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <form className="space-y-4">
            <h2 className="text-[#6C7275]  font-bold text-xs">FULL NAME</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <h2 className="text-[#6C7275]  font-bold text-xs">Email</h2>

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <h2 className="text-[#6C7275]  font-bold text-xs">Your number</h2>

            <input
              type="text"
              placeholder="Your number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <h2 className="text-[#6C7275]  font-bold text-xs">Your message</h2>

            <textarea
              placeholder="Your message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Send Message
            </button>
          </form>

          {/* Map */}
          <div className="w-full h-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093707!2d144.95373531590443!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d94f69e124a4!2sGoogle!5e0!3m2!1sen!2sin!4v1614121344240!5m2!1sen!2sin"
              width="100%"
              height="500"
              allowFullScreen={false}
              loading="lazy"
              className="border rounded-lg"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Section */}
    </div>
  );
};

export default QuoteForm;
