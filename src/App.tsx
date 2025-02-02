import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { CloudIcon } from "./assets/CloudIcon";
import MobileImage from "./assets/mobile.png";
import { MobileBgIcon } from "./assets/MobileBgIcon";
import AboutUsPage from "./component/about";
import { Navbar } from "./component/navbar";
import { Partners } from "./component/partners";
import OurService from "./component/service";
import Testimonial from "./component/testimonial";
import ContactUsPage from "./pages/contactUs";
import HomePage from "./pages/homePage";
import OurServicePage from "./pages/ourService";
import TestimonialPage from "./pages/testimonial";
import AboutPage from "./pages/about";
import { useState } from "react";

function App() {
  const [isopen, setIsopen] = useState(true);
  return (
    <Router>
      <Navbar isopen={isopen} setIsopen={setIsopen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<ServicePage />} /> */}
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/our-services" element={<OurServicePage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </Router>
  );

  return (
    <>
      <div className="h-full relative overflow-x-hidden bg-[#0A5EB0]">
        <div className="  relative ">
          <Navbar />
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
}

export default App;
