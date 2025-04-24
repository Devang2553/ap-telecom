import React from "react";

interface ServiceCardProps {
  image: any;
  statsNumber?: string;
  statsText?: string;
  title: string;
  description: string;
  reverse: boolean; // Prop to control layout direction
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  reverse = false, // Prop to control layout direction
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row  items-center gap-9  mb-10  lg:px-14  ${
        reverse ? " lg:flex-row-reverse" : "flex-col lg:flex-row"
      }`}
    >
      {/* Image Section */}
      <div className="ima relative px-3 lg:px-0">
        <div className="hidden lg:block  absolute bg-[#F7F9FC] -z-10 -top-10 -left-10"></div>
        <img
          src={image}
          alt={title}
          className=" lg:h-[565px] w-[400px] lg:min-w-[525px]  object-contain bg-[#F7F9FC]"
        />
        {/* <div className="absolute bottom-4 right-5 bg-[#0A5EB0] py-4 px-6 w-fit flex items-center gap-3">
          <h3 className="font-bold text-white text-[40px]">{statsNumber}</h3>
          <p className="text-white">
            {statsText.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div> */}
      </div>

      {/* Text Section */}
      <div className="text w-screen lg:w-auto overflow-hidden px-3 ">
        <h1 className="text-2xl lg:text-[40px] font-semibold">{title}</h1>
        <p className="text-md lg:text-2xl text-[#8492A7] mt-5">{description}</p>
      </div>
    </div>
  );
};
