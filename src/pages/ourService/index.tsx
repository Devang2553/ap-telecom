import { useState } from "react";
import ServiceBG from "../../assets/secBG.jpeg";
import { HeroSection } from "../../component/mainSection";
import OurService from "../../component/service";

const OurServicePage = () => {
  const [selectedTab, setSelectedTab] = useState(2);

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <HeroSection
        backgroundImage={ServiceBG}
        title="Our Service"
        subtitle="Home ideas and design inspiration"
      />

      {/* Services Section */}
      <div className="mt-[50px]">
        {" "}
        {/* Reduced margin-top to compensate */}
        <OurService selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
    </div>
  );
};

export default OurServicePage;
