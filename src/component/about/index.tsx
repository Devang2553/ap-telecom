// import AboutImage from "../../assets/aboutImage.png";
// import AboutImage from "../../assets/aboutUsImg.png";
import { useLocation, useNavigate } from "react-router-dom";
import AboutImage from "../../assets/aboutImg.jpg";

const AboutUsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-fit">
        <div className="h-[63px] border-b-2 border-[#0A5EB0] mb-3">
          <h1 className="font-extrabold text-4xl">ABOUT US</h1>
        </div>
        <div className="mt-3 px-7">
          {/* <p className="text-[#4A4A4A] text-center md:text-left">
            At Muhiris, we believe in the power of community and creativity
          </p> */}
        </div>

        <div className="  flex flex-col md:flex-row items-center px-8 justify-between w-full mt-16 max-w-screen-xl mx-auto">
          <div className="left flex flex-col w-full  gap-10 ">
            <h1 className="font-bold text-[40px]">Who We Are</h1>
            <p className="lg:w-[80%]">
              AP Telecom Pty Ltd is a leading provider of telecommunication and
              security solutions, dedicated to meeting the evolving needs of our
              clients. With years of experience and a team of skilled
              professionals, we are committed to delivering exceptional service
              and innovative solutions.
            </p>
            {location.pathname == "/" && (
              <button
                onClick={() => {
                  navigate("/about-us");
                }}
                className="bg-[#0A5EB0] w-fit mx-auto md:mx-0 text-white rounded-[50px] py-4 px-12 font-semibold "
              >
                Read more
              </button>
            )}
          </div>
          <div className="right mt-10 md:mt-0 h-full sm:w-1/2 md:w-1/2">
            <img src={AboutImage} alt="" className=" aspect-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
