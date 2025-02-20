import { MobileBgIcon } from "../../assets/MobileBgIcon";
import MobileImage from "../../assets/mobileIcon.png";
import AboutUsPage from "../../component/about";
import QuoteForm from "../../component/footer/BottomPage";
import { Partners } from "../../component/partners";
import OurService from "../../component/service";
import Testimonial from "../../component/testimonial";
import Avatar from "../../assets/avatar12.png";
import { AnimatedSection } from "../../component/animatedSection";
import { LogoIcon } from "../../assets/LogoIcon";

const testimonials = [
  {
    name: "Jhon Smith",
    role: "Web Developer",
    image: { Avatar },
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
  },
  {
    name: "Md Shamim Hossain",
    role: "UI/UX Designer",
    image: { Avatar },
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
  },
  {
    name: "Jesica Lirona",
    role: "Front End Developer",
    image: { Avatar },
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
  },
  {
    name: "Emily Watson",
    role: "Backend Developer",
    image: { Avatar },
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
  },
  {
    name: "Michael Scott",
    role: "Project Manager",
    image: { Avatar },
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
  },
];

const HomePage = () => {
  return (
    <>
      <div className="h-full relative  bg-[#0A5EB0]    pt-10  ">
        <div className="  relative  ">
          <section className="md:flex  justify-between ">
            <div className="left-side md:ml-20 mt-32 md:mt-20 px-7 md:px-0">
              <h1 className="font-black text-white text-[24px] text-center md:text-left md:text-[30px]">
                Welcome to AP Telecom Pty Ltd <br />
                Your Trusted Partner for Telecommunication <br /> and Security
                Solutions.
              </h1>
              <p className="text-white mt-[20px] md:max-w-[80%]">
                {" "}
                At AP Telecom Pty Ltd, we specialize in providing cutting-edge
                telecommunication and security services tailored to your needs.
                With a commitment to excellence, reliability, and innovation, we
                deliver solutions that keep you connected and secure, whether at
                home or in the workplace.
              </p>
              <p className="text-white mt-[20px] md:max-w-[80%]">
                Experience seamless connectivity and enhanced security with our
                professional services. Contact us today for a consultation.
              </p>
            </div>
            <div className="right-side relative md:min-w-[439px] flex items-center justify-center md:block mt-10 md:mt-0  ">
              <div className="">
                <img src={MobileImage} className=" " />
              </div>
              <div className="absolute -bottom-32 md:-bottom-20  left-10  md:-left-24 ">
                <div className="relative flex items-center justify-center mx-auto  md:w-full w-[350px]">
                  <MobileBgIcon />
                  <div className="absolute -top-10 md:top-0">
                    <div className="flex items-center justify-center w-full h-full">
                      <LogoIcon className="w-32 md:w-52" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <Partners />
      </div>
      <AnimatedSection>
        <AboutUsPage />
      </AnimatedSection>
      <OurService />
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
