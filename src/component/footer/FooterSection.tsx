import { DribbleIcon } from "../../assets/DribbleIcon";
import { FBIcon } from "../../assets/FBIcon";
import { GithubIcon } from "../../assets/GithubIcon";
import { WhiteLogo } from "../../assets/WhiteLogo";
import { XIcon } from "../../assets/XIcon";

export const FooterSection = () => {
  return (
    <div className="md:pt-40">
      <div className="slantdiv bg-gray-900"></div>
      <footer className=" slant bg-gray-900 text-white py-10 bg-skew first ">
        <div className="unskew max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10  justify-evenly">
          {/* Logo and Description */}
          <div className="flex flex-col items-start gap-3 max-w-[400px]  ">
            <div className="aspect-auto">
              <WhiteLogo />
            </div>
            {/* <img src={Logo} className="aspect-auto " /> */}
            <p className="text-gray-400">
              In the fast-paced world of modern technology, many leadership
              executives and organizations understand that building.
            </p>
            <div className="flex items-center gap-2">
              <FBIcon />
              {/* <img src={FB} /> */}
              <DribbleIcon />
              {/* <img src={dribbble} /> */}
              <GithubIcon />
              {/* <img src={Github} /> */}
              {/* <img src={twitter} /> */}
              <XIcon />
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="w-fit flex flex-col md:flex-row gap-3">
            <div className="w-full">
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

            Community
            <div className="w-full">
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white line-through "
                  >
                    Learners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white line-through"
                  >
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

            Newsletter
            <div className="w-full">
              <h4 className="text-lg font-semibold mb-4 underline">
                Newsletter
              </h4>
              <p className="text-gray-400 mb-4 underline">
                Sign up and receive the latest tips via email.
              </p>
              <form className="flex flex-col items gap-6 w-full">
                <div className="flex items-center ">
                  <input
                    type="email"
                    placeholder="Enter Your Mail"
                    className=" p-2 px-9 w-[82%]  sm:w-fit bg-white/20 absolute placeholder:underline  focus:outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 ml-2 top-3 left-1 opacity-20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 flex items-center justify-center gap-3  text-white px-9 min-w-[250px] py-2    hover:bg-blue-700 underline"
                >
                  Subscribe Now <SendIcon />
                </button>
              </form>
            </div>
          </div> */}
        </div>
        {/* Footer Bottom */}
        <div className="unskew border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          © 2025 All rights Reserved- Ap telecom pty ltd
        </div>
      </footer>{" "}
    </div>
  );
};
