import React from "react";

interface ServiceCardProps {
  image: any;
  statsNumber: string;
  statsText: string;
  title: string;
  description: string;
  reverse: boolean; // Prop to control layout direction
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  statsNumber,
  statsText,
  title,
  description,
  reverse = false, // Prop to control layout direction
}) => {
  return (
    <div
      className={`flex items-center gap-9 h-screen px-14 mt-12 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Image Section */}
      <div className="image h-[565px] w-[525px] relative">
        <img src={image} alt={title} className="h-[565px] min-w-[525px]" />
        <div className="absolute bottom-4 right-5 bg-[#0A5EB0] py-4 px-6 w-fit h-[84px] flex items-center gap-3">
          <h3 className="font-bold text-white text-[40px]">{statsNumber}</h3>
          <p className="text-white">
            {statsText.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>

      {/* Text Section */}
      <div className="text">
        <h1 className="text-[40px] font-semibold">{title}</h1>
        <p className="text-2xl text-[#8492A7] mt-5">{description}</p>
      </div>
    </div>
  );
};
