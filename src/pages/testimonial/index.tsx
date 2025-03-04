import Avatar from "../../assets/avatar12.png";
import ServiceBG from "../../assets/secBG.jpeg";
import { HeroSection } from "../../component/mainSection";
import QuoteIcon2 from "/Quote2.png";

const testimonials = [
  {
    name: "Jhon Smith",
    role: "Web Developer",
    image: "https://via.placeholder.com/50",
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
  },
  {
    name: "Md Shamim Hossain",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/50",
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
  },
  {
    name: "Jesica Lirona",
    role: "Front End Developer",
    image: "https://via.placeholder.com/50",
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
  },
  {
    name: "Emily Watson",
    role: "Backend Developer",
    image: "https://via.placeholder.com/50",
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
  },
  {
    name: "Michael Scott",
    role: "Project Manager",
    image: "https://via.placeholder.com/50",
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
  },
  {
    name: "Michael Scott",
    role: "Project Manager",
    image: "https://via.placeholder.com/50",
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
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
