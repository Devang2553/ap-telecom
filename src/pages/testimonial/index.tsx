import Avatar from "../../assets/avatar12.png";
import ServiceBG from "../../assets/secBG.jpeg";
import { HeroSection } from "../../component/mainSection";
import QuoteIcon2 from "/Quote2.png";

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

const TestimonialPage = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={ServiceBG}
        subtitle="Home ideas and design inspiration"
        title="Testimonials"
      />
      <div className="px-10 w-full">
        <h2 className="text-[18px] font-semibold text-blue-800 mb-4">
          TESTIMONIAL
        </h2>
        <h3 className="lg:text-[40px] text-xl font-bold mb-24 lg:mb-8 text-gray-800 md:leading-10 break-words">
          See What Others Have to Say About Us
        </h3>
      </div>
      <div className="mb-40 mt-20">
        {/* <TestimonialSlider testimonials={testimonials} /> */}
        <div className="flex items-center   justify-center gap-5 flex-wrap">
          {testimonials.map((testimonial: any, index: any) => (
            <div key={index} className="min-w-96 w-96 ">
              <div
                className={`relative p-6 py-10 shadow-md transition duration-300 ease-in-out transform h-full 
                  bg-[#F7F9FC]
                `}
              >
                {/* Quote Icon */}
                <div>
                  <img
                    src={QuoteIcon2}
                    alt="Quote Icon"
                    className="w-14 h-12 mb-4"
                  />
                </div>

                {/* Feedback Text */}
                <p className="text-sm mb-6">{testimonial.feedback}</p>

                {/* Down Arrow */}
                <div className="absolute bottom-[-14px] left-[10%] transform -translate-x-1/2">
                  <div
                    className={`w-0 h-0 border-t-[15px] 
                        border-t-[#F7F9FC]
                     border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent`}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8 ml-10">
                <img
                  src={Avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p
                    className={`text-sm font-medium 
                      text-gray-500
                    `}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
