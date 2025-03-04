import {
  AddressIcon,
  AjhuaIcon,
  BsaIcon,
  CloseIcon,
  CloudIcon,
  DownerIcon,
  EmailIcon,
  FBIcon,
  FultonHogonIcon,
  HiLookIcon,
  HiVisionIcon,
  NbnIcon,
  ServiceStreamIcon,
  Ventia,
  VisionStream,
} from "../../assets/index";
import Logo2 from "../../assets/logo2.png";
import Logo3 from "../../assets/logo3.png";
import Logo4 from "../../assets/logo4.png";
import Logo5 from "../../assets/logo5.png";
import Logo6 from "../../assets/logo6.png";
import Logo7 from "../../assets/logo7.png";
const array = [
  {
    id: 1,
    image: <HiLookIcon />,
  },
  {
    id: 2,
    image: <HiVisionIcon />,
  },
  {
    id: 3,
    image: <AjhuaIcon />,
  },
  {
    id: 4,
    image: <NbnIcon />,
  },
  {
    id: 5,
    image: <BsaIcon />,
  },
  {
    id: 6,
    image: <DownerIcon />,
  },
  {
    id: 7,
    image: <ServiceStreamIcon />,
  },
  {
    id: 8,
    image: <VisionStream />,
  },
  {
    id: 9,
    image: <Ventia />,
  },
  {
    id: 10,
    image: <FultonHogonIcon />,
  },
];

export const Partners = () => {
  return (
    <div className="pt-5">
     

      <div className="flex flex-col items-center w-full justify-center h-fit   mb-20">
        <h1 className="font-extrabold text-3xl text-center md:text-[40px] ">
          PROUD MARKETING <span className="text-[#0A5EB0]">PARTNERS</span> WITH
        </h1>
        <div className="px-5 md:px-16 pt-7 flex  justify-center w-full  gap-3 flex-wrap lg:flex-nowrap md:flex-row items-center ">
          {array?.map((x) => (
            <div
              key={x.id}
              className="min-w-80 md:min-w-0  flex items-center justify-center "
            >
              {x.image}
              {/* <img src={x.image} alt="" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
