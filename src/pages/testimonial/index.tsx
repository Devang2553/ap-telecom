import ServiceBG from "../../assets/secBG.jpeg";
import { HeroSection } from "../../component/mainSection";

const TestimonialPage = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={ServiceBG}
        subtitle="Home ideas and design inspiration"
        title="Testimonials"
      />
    </div>
  );
};

export default TestimonialPage;
