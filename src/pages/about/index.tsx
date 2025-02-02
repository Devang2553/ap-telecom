import ServiceBG from "../../assets/secBG.jpeg";

import Mission1 from "../../assets/m1.png";
import Mission2 from "../../assets/m2.png";
import Mission3 from "../../assets/m3.png";
import Mission4 from "../../assets/m4.png";
import OurValues from "../../assets/ourValues.png";
import WcUImg from "../../assets/wcu.png";
import WwrImg from "../../assets/wwr.png";
import WwrImg2 from "../../assets/wwr2.png";
import AboutUsPage from "../../component/about";
import { HeroSection } from "../../component/mainSection";

const AboutPage = () => {
  const dataArray = [
    {
      id: 1,
      title: "Customer-Centric Approach",
      description:
        "We prioritize understanding your needs to deliver solutions that truly make a difference.",
    },
    {
      id: 2,
      title: "Experienced Professionals",
      description:
        "Our certified technicians bring unparalleled expertise to every project.",
    },
    {
      id: 3,
      title: "Cutting-Edge Technology",
      description:
        "We utilize the latest tools and systems to ensure optimal performance and reliability.",
    },
    {
      id: 4,
      title: "Tailored Solutions",
      description:
        "Whether it's enhancing connectivity or securing your property, our solutions are designed to fit your unique requirements.",
    },
  ];

  const ourValueAreay = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We operate with honesty and transparency, building lasting relationships with our clients.",
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "By staying ahead of technological advancements, we offer solutions that are both modern and practical.",
    },
    {
      id: 3,
      title: "Excellence",
      description:
        "We are dedicated to achieving the highest standards in every project we undertake.",
    },
  ];
  return (
    <div>
      <HeroSection
        backgroundImage={ServiceBG}
        subtitle="Home ideas and design inspiration"
        title="About us"
      />
      <div className="my-0">
        <AboutUsPage />
      </div>
      {/* our Mission */}
      <div className="flex items-center justify-between  px-20">
        <div className="flex flex-col  gap-4 w-[50%]">
          <h2 className="text-[40px] font-bold">Our Mission</h2>
          <p className="text-[#4A4A4A] text-2xl">
            Our mission is to empower our clients with seamless connectivity and
            robust security, ensuring peace of mind and efficient communication
            in a rapidly evolving digital world. We believe in blending
            innovation, expertise, and exceptional service to exceed
            expectations every step of the way.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <img src={Mission1} alt="" className="h-64  " />
          <img src={Mission2} alt="" className=" h-48  " />
          <img src={Mission3} alt="" className="  " />
          <img src={Mission4} alt="" className="h-64 row-span-1 -mt-12 ml-6" />
        </div>
      </div>
      {/* Who we are  */}
      <div className="px-20 my-20 flex  items-center  justify-between">
        <div className="relative w-[50%]">
          <div className="bg-[#0A5EB033]  w-[466px]  p-4 ">
            <img src={WwrImg} alt="" />
          </div>
          <div className="bg-[#0A5EB033]  w-[334px]  p-4 absolute top-[47%] right-10 ">
            <img src={WwrImg2} alt="" />
          </div>
        </div>
        <div className=" relative w-[50%] left flex flex-col gap-10 mt-11">
          <h1 className="font-bold text-[40px]">Who We Are</h1>
          <p className="w-[100%] text-[#4A4A4A]  text-2xl">
            A trusted provider of comprehensive telecommunication and security
            solutions. Specialists in offering tailored services for residential
            and commercial clients. A team of passionate experts driven by
            quality, reliability, and customer satisfaction.
          </p>
        </div>
        <div></div>
      </div>
      {/* why us */}
      <div className="mt-40 px-20 flex  items-start justify-between ">
        <div className="w-[50%]">
          <h2 className="text-[40px]  font-bold">Why Choose Us?</h2>
          <div>
            <div className="flex flex-col gap-5 mt-3">
              {dataArray?.map((x) => (
                <p key={x.id} className="font-bold text-2xl">
                  {x.id}. {x.title}:{" "}
                  <span className="font-normal">{x.description}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#0A5EB033]  2xl:w-[626px] 2xl:h-[683px] w-[550px]  p-4 ">
            <img src={WcUImg} alt="" />
          </div>
        </div>
      </div>

      {/* Our values */}
      <div className="flex items-center px-10 my-20">
        <div className="w-[45%]">
          <div className="relative h-[443px] w-[493px]">
            <img
              src={OurValues}
              alt=""
              className="rounded-lg h-[443px] ml-5 w-[493px]"
            />
            <div className="absolute bottom-6 left-8 bg-[#0A5EB0] w-60 h-52 rounded-lg -z-10"></div>
          </div>
        </div>

        <div className="w-[58%]">
          <h2 className="text-[40px]  font-bold">Our Values</h2>

          <div className="flex flex-col gap-5 mt-3">
            {ourValueAreay?.map((x) => (
              <p key={x.id} className="font-bold text-2xl">
                {x.id}. {x.title}:{" "}
                <span className="font-normal">{x.description}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
