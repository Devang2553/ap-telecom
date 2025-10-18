import { useState } from "react";
import { SideIconHomePage } from "../../assets/SideIconHomePage";
import AboutUsPage from "../../component/about";
import { AnimatedSection } from "../../component/animatedSection";
import QuoteForm from "../../component/footer/BottomPage";
import { Partners } from "../../component/partners";
import OurService from "../../component/service";
import Testimonial from "../../component/testimonial";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner, Sydney",
    image: "https://via.placeholder.com/50",
    feedback:
      "AP Telecom Pty Ltd completely transformed the internet experience in our home. Their WiFi setup is flawless, and we’ve never had better connectivity. Highly professional and reliable service!",
  },
  {
    name: "Mark T.",
    role: "Small Business Owner",
    image: "https://via.placeholder.com/50",
    feedback:
      "I needed a trustworthy team to install security cameras and alarms in my store. AP Telecom delivered on time, explained everything clearly, and the system works perfectly. Total peace of mind now!",
  },
  {
    name: "Anita R.",
    role: "Property Manager",
    image: "https://via.placeholder.com/50",
    feedback:
      "The team at AP Telecom are experts at what they do. From data cabling to intercom systems, everything was handled smoothly and professionally. Highly recommend them for any property!",
  },
  {
    name: "David L.",
    role: "IT Manager, Corporate Office",
    image: "https://via.placeholder.com/50",
    feedback:
      "Their fibre optic installation was fast, clean, and efficient. They even helped optimize our internal network. Couldn’t be happier with their technical expertise!",
  },
  {
    name: "Priya K.",
    role: "Café Owner",
    image: "https://via.placeholder.com/50",
    feedback:
      "Thanks to AP Telecom, we now have a strong WiFi signal throughout our café and a CCTV system that lets us monitor everything from our phones. Great investment and great team!",
  },
  {
    name: "Thomas W.",
    role: "New Home Builder",
    image: "https://via.placeholder.com/50",
    feedback:
      "We hired AP Telecom for both wifi and security camera setup in our new building. From phone line to alarm installation, every service was handled with professionalism. Exceptional service from start to finish.",
  },
];
const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <>
      <div className="h-full relative  bg-[#0A5EB0]    md:pt-10  ">
        <div className="  relative  pb-10">
          <section className="flex md:flex-row flex-col-reverse    ">
            {/* Left side */}
            <div className="left-side  md:ml-20  md:mt-20 px-7 md:px-0 md:w-[50%]">
              <h1 className="font-black text-white text-[24px] text-center md:text-left md:text-[30px]">
                Welcome to AP Telecom Pty Ltd <br />
                Your Trusted Partner for Telecommunication <br /> and Security
                Solutions.
              </h1>
              <p className="text-white mt-[20px] md:w-[90%]">
                {" "}
                At AP Telecom Pty Ltd, we specialize in providing cutting-edge
                telecommunication and security services tailored to your needs.
                With a commitment to excellence, reliability, and innovation, we
                deliver solutions that keep you connected and secure, whether at
                home or in the workplace.
              </p>
              <p className="text-white mt-[20px] md:w-[90%]">
                Experience seamless connectivity and enhanced security with our
                professional services. Contact us today for a consultation.
              </p>
            </div>
            {/* right side */}
            <div className="right-side mx-auto w-fit relative   md:block   ">
              {/* <div className="">
                <img src={MobileImage} className=" " />
              </div> */}
              <div className="w-fit">
                <div className=" ">
                  {/* <div className="relative flex items-center justify-center mx-auto  md:w-full w-[350px]">
                  <MobileBgIcon />
                  <div className="absolute -top-10 md:top-0">
                    <div className="flex items-center justify-center w-full h-full">
                      <LogoIcon className="w-32 md:w-52" />
                    </div>
                  </div>
                </div> */}
                  <div>
                    {/* <img src={SideImg} alt=""  /> */}
                    <SideIconHomePage className="w-72 md:w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <div className="overflow-hidden w-[100vw]  absolute bottom-0 z-50  h-[155px]    bg-[#0A5EB0] ">
        <CloudIcon />
      </div> */}
        </div>
      </div>
      <div>
        <Partners />
      </div>
      <AnimatedSection>
        <AboutUsPage />
      </AnimatedSection>
      <div className="mt-20">
        <OurService selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      {/* <AnimatedSection><Testimonial /></AnimatedSection> */}
      <AnimatedSection>
        <Testimonial testimonials={testimonials} />
      </AnimatedSection>
      <AnimatedSection>
        <QuoteForm />
      </AnimatedSection>
    </>
  );
};

export default HomePage;
