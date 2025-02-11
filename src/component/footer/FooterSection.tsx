import { LogoIcon } from "../../assets/LogoIcon";

export const FooterSection = () => {
  return (
    <div>
      <div className="slantdiv bg-gray-900"></div>
      <footer className=" slant bg-gray-900 text-white py-10 bg-skew first ">
        <div className="unskew max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              <LogoIcon color="white" />
            </h3>
            <p className="text-gray-400">
              In the fast-paced world of modern technology, many leadership
              executives and organizations understand that building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Learners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Developers
                </a>
              </li>
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
