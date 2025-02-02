import React from "react";
import { Partners } from "../../component/partners";
import AboutUsPage from "../../component/about";
import OurService from "../../component/service";
import Testimonial from "../../component/testimonial";
import { CloudIcon } from "../../assets/CloudIcon";
import { MobileBgIcon } from "../../assets/MobileBgIcon";
import MobileImage from "../../assets/mobile.png";

const HomePage = () => {
  return (
    <>
      <div className="h-full relative overflow-x-hidden bg-[#0A5EB0]">
        <div className="  relative ">
          <section className="flex  justify-between mt-20">
            <div className="left-side ml-20 mt-20">
              <h1 className="font-black text-white text-[40px]">
                Welcome to AP Telecom Pty Ltd <br />
                Your Trusted Partner for Telecommunication <br /> and Security
                Solutions.
              </h1>
              <p className="text-white mt-[20px] max-w-[80%]">
                {" "}
                At AP Telecom Pty Ltd, we specialize in providing cutting-edge
                telecommunication and security services tailored to your needs.
                With a commitment to excellence, reliability, and innovation, we
                deliver solutions that keep you connected and secure, whether at
                home or in the workplace.
              </p>
              <p className="text-white mt-[20px] max-w-[80%]">
                Experience seamless connectivity and enhanced security with our
                professional services. Contact us today for a consultation.
              </p>
            </div>
            <div className="right-side relative min-w-[439px]   ">
              <div>
                <img src={MobileImage} className=" " />
              </div>
              <div className="absolute -bottom-20 -left-24">
                <MobileBgIcon />
              </div>
            </div>
          </section>
        </div>
        <div className="relative h-full  ">
          <div className="absolute  left-[-100px]   pt-20 ">
            <CloudIcon />
          </div>
        </div>
      </div>
      <div>
        <Partners />
      </div>
      <div>
        <AboutUsPage />
      </div>
      <div>
        <OurService />
      </div>
      <div>
        <Testimonial />
      </div>
    </>
  );
};

export default HomePage;
