import React from "react";
import "./footer.css"

const QuoteForm = () => {
  return (
    <div className="bg-white">
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
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Your number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093707!2d144.95373531590443!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d94f69e124a4!2sGoogle!5e0!3m2!1sen!2sin!4v1614121344240!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen={false}
              loading="lazy"
              className="border rounded-lg"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="slantdiv bg-gray-900"></div>
      <footer className=" slant bg-gray-900 text-white py-10 bg-skew first ">

        <div className="unskew max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-lg font-bold mb-4">AP Telecom Pty Ltd</h3>
            <p className="text-gray-400">
              In the fast-paced world of modern technology, many leadership executives
              and organizations understand that building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Learners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Leadership</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Developers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Sign up and receive the latest tips via email.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter Your Mail"
                className="w-full p-3 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-3 rounded-r-lg hover:bg-blue-700"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="unskew border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          © 2021 All Rights Reserved — Primoskit
        </div>

      </footer>
    </div>
  );
};

export default QuoteForm;
