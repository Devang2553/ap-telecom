import ServiceBG from "../../assets/secBG.jpeg";
import { HeroSection } from "../../component/mainSection";
import TestimonialSlider from "../../component/testimonial";

const testimonials = [
  {
    name: "Jhon Smith",
    role: "Web Developer",
    image: "https://via.placeholder.com/50",
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer."
  },
  {
    name: "Md Shamim Hossain",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/50",
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer."
  },
  {
    name: "Jesica Lirona",
    role: "Front End Developer",
    image: "https://via.placeholder.com/50",
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer."
  },
  {
    name: "Emily Watson",
    role: "Backend Developer",
    image: "https://via.placeholder.com/50",
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer."
  },
  {
    name: "Michael Scott",
    role: "Project Manager",
    image: "https://via.placeholder.com/50",
    feedback:
      "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer."
  }
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
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialPage;
