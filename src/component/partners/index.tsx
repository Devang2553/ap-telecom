import { CloudIcon } from "../../assets/CloudIcon";
import Logo1 from "../../assets/logo1.png";
import Logo2 from "../../assets/logo2.png";
import Logo3 from "../../assets/logo3.png";
import Logo4 from "../../assets/logo4.png";
import Logo5 from "../../assets/logo5.png";
import Logo6 from "../../assets/logo6.png";
import Logo7 from "../../assets/logo7.png";
const array = [
  {
    id: 1,
    image: Logo1,
  },
  {
    id: 2,
    image: Logo2,
  },
  {
    id: 3,
    image: Logo3,
  },
  {
    id: 4,
    image: Logo4,
  },
  {
    id: 5,
    image: Logo5,
  },
  {
    id: 6,
    image: Logo6,
  },
  {
    id: 7,
    image: Logo7,
  },
];

export const Partners = () => {
  return (
    <div>
      <div className="overflow-x-hidden   h-[123px] sm:h-full  bg-[#0A5EB0] ">
        <CloudIcon />
      </div>

      <div className="flex flex-col items-center w-full justify-center h-fit   mb-20">
        <h1 className="font-extrabold text-3xl text-center md:text-[40px] ">
          PROUD MARKETING <span className="text-[#0A5EB0]">PARTNERS</span> WITH
        </h1>
        <div className="px-5 md:px-16 pt-7 flex  justify-center w-full  gap-3 flex-col md:flex-row items-center ">
          {array?.map((x) => (
            <div
              key={x.id}
              className="min-w-96 md:min-w-0  flex items-center justify-center "
            >
              <img src={x.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
