import ServiceBG from "../../assets/secBG.jpeg";
import { HeroSection } from "../../component/mainSection";
import OurService from "../../component/service";

const OurServicePage = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        backgroundImage={ServiceBG}
        title="Our Service"
        subtitle="Home ideas and design inspiration"
      />

      {/* Services Section */}
      <div className="mt-[50px]">
        {" "}
        {/* Reduced margin-top to compensate */}
        <OurService />
      </div>
    </div>
  );
};

export default OurServicePage;
