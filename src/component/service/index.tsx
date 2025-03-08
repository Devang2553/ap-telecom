import { useState } from "react";
import Service01Image from "../../assets/s001.png";
import Service02Image from "../../assets/s002.png";
import Service03Image from "../../assets/s003.png";
import Service04Image from "../../assets/s004.png";
import Service1Image from "../../assets/s1.png";
import Service2Image from "../../assets/s2.png";
import Service3Image from "../../assets/s3.png";
import Service4Image from "../../assets/s4.png";
import Service5Image from "../../assets/s5.png";
import Service7Image from "../../assets/s7.png";
import { ServiceCard } from "./ServiceCard";
import { AnimatedSection } from "../animatedSection";

const OurService = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const serviceArray1 = [
    {
      id: 1,
      title: "Telecommunication Assistance",
      description:
        "Our telecommunication experts are here to assist with all aspects of your communication systems. From troubleshooting network issues to upgrading outdated infrastructure, we ensure your systemsperform optimally. Whether it’s configuring new systems for homes or managing complex networks for corporate offices, we provide tailored solutions for maximum efficiency and reliability.",
      image: Service1Image,
      years: "25",
      reverse: false,
    },
    {
      id: 2,
      title: "WiFi Access Point Installation",
      description:
        " Ensure seamless internet access with professionally installed WiFi access points. We strategically position access points to eliminate dead zones and optimize coverage, creating a stable and robust network. Our solutions are ideal for multi-story homes, offices, retail spaces, and large properties requiring uninterrupted connectivity.",
      image: Service2Image,
      years: "25",
      reverse: true,
    },
    {
      id: 3,
      title: "Phone Line Repair",
      description:
        " Phone line issues can disrupt both personal and professional communication. We quickly diagnose problems like static, outages, or poor call quality and restore your lines to full functionality. With expertise in analog and digital systems, our services ensure crystal-clear and reliable communication.",
      image: Service3Image,
      years: "25",
      reverse: false,
    },
    {
      id: 4,
      title: "Internet Connection Repairs",
      description:
        "Slow internet speeds or frequent dropouts? We identify and fix the root causes of these disruptions, whether they stem from hardware malfunctions, faulty cabling, or service provider issues. Our goal is to restore consistent and high-speed internet to keep you connected without interruptions.",
      image: Service4Image,
      years: "25",
      reverse: true,
    },
    {
      id: 5,
      title: "Data Cabling",
      description:
        "High-quality data cabling is the backbone of any modern network. We design and implement structured cabling systems that support efficient data transmission, future scalability, and ease of maintenance. Perfect for smart homes, data centers, and office environments, our cabling ensures long-term reliability.",
      image: Service5Image,
      years: "25",
      reverse: false,
    },
    {
      id: 6,
      title: "Fibre Optic Service",
      description:
        " For unparalleled speed and reliability, we specialize in fibre optic installations. This state-of-the-art technology supports high-speed data transfer, making it an excellent choice for businesses and individuals with heavy internet usage. From planning and installation to maintenance, we handle every detail to deliver a cutting-edge network.",
      image: Service3Image,
      years: "25",
      reverse: true,
    },
    {
      id: 7,
      title: "Cable Joints and Installation",
      description:
        "Cable jointing is crucial for ensuring strong and stable connections in complex networks. Our services include secure cable splicing and installation using advanced techniques and premium materials, ideal for industrial environments, data centers, and residential projects.",
      image: Service7Image,
      years: "25",
      reverse: false,
    },
  ];
  const serviceArray2 = [
    {
      id: 1,
      title: "CCTV Cameras",
      description:
        "Keep an eye on your property at all times with our advanced CCTV systems. Our solutions include high-definition cameras, night vision capabilities, and remote monitoring via smartphones or desktops. Whether it’s for a home, business, or industrial site, our customizable systems provide reliable surveillance and peace of mind.",
      image: Service01Image,
      years: "25",
      reverse: false,
    },
    {
      id: 2,
      title: "Security Alarms",
      description:
        "Protect what matters most with our sophisticated alarm systems. Featuring motion detectors, instant notifications, and integration with smart home devices, our alarms provide rapid response to potential threats. These systems are designed to deter intrusions and ensure your safety round the clock.",
      image: Service02Image,
      years: "25",
      reverse: true,
    },
    {
      id: 3,
      title: "Audio/Video Intercoms",
      description:
        "Simplify access control with our high-tech intercom systems. Equipped with high-resolution video and two-way audio, these systems enable secure communication and verification of visitors. Perfect for gated communities, commercial buildings, and residential properties, our intercoms add an extra layer of safety and convenience.",
      image: Service03Image,
      years: "25",
      reverse: false,
    },
    {
      id: 4,
      title: "Data and Telecom Cabling",
      description:
        "Security systems require a strong foundation, and our cabling services deliver just that. We install and manage clean, efficient cabling networks that support seamless integration of cameras, alarms, intercoms, and other devices. Our solutions are designed to handle high-performance data and power requirements while ensuring future scalability.",
      image: Service04Image,
      years: "25",
      reverse: true,
    },
  ];

  const handleSelectTab = (type: number) => {
    setSelectedTab(type);
  };

  // const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className="flex flex-col items-center justify-center h-fit px-5 md:px-0 ">
      <div className="h-[63px] border-b-2 border-[#0A5EB0] mb-3">
        <h1 className="font-extrabold text-4xl">Our Service</h1>
      </div>
      <div className="bg-[#EBF6FF] w-fit h-[60px] flex items-center justify-center mt-5 md:mt-0  md:px-5 rounded">
        <h2
          onClick={() => handleSelectTab(1)}
          className={`${
            selectedTab == 1 ? "bg-[#0A5EB0] text-white rounded" : ""
          } p-2 w-full text-xs sm:text-sm md:text-base lg:text-lg cursor-pointer text-center md:text-left`}
        >
          Telecommunication Services
        </h2>
        <h2
          onClick={() => handleSelectTab(2)}
          className={`${
            selectedTab == 2 ? "bg-[#0A5EB0] text-white rounded" : ""
          } p-2 w-full text-xs sm:text-sm md:text-base lg:text-lg cursor-pointer md:whitespace-nowrap pl-4  text-center md:text-left`}
        >
          Security Alarm and CCTV Services
        </h2>
      </div>
      <div className=" mt-7 ">
        {(selectedTab == 1 ? serviceArray1 : serviceArray2)?.map((x) => (
          <AnimatedSection key={x.id}>
            <ServiceCard
              key={x.id}
              image={x.image}
              statsNumber={`${x.years}+`}
              statsText={`Years Of\nExperience`}
              title={x.title}
              description={x.description}
              reverse={x.reverse}
            />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default OurService;
