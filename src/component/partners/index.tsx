import React from "react";
import PartnersImage from "../../assets/partners.png";
export const Partners = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center h-fit  mb-20">
      <h1 className="font-extrabold text-[40px] ">
        PROUD MARKETING <span className="text-[#0A5EB0]">PARTNERS</span> WITH
      </h1>
      <div className="px-16 pt-7">
        <img src={PartnersImage} alt="" />
      </div>
    </div>
  );
};
