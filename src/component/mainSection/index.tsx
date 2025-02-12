import { CloudIcon } from "../../assets/CloudIcon";

export const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
}: {
  backgroundImage: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="relative h-[calc(100vh-100px)] w-full overflow-hidden">
      {" "}
      {/* Adjusted height to subtract navbar height */}
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="h-full w-full object-cover absolute top-0 left-0 z-0"
      />
      {/* Black Overlay */}
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-60 z-0"></div>
      {/* Text Content */}
      <div className="absolute -top-12 left-0 flex flex-col items-center justify-center gap-6 text-white w-full h-full z-10">
        <p className="text-lg">{`Home > ${title}`}</p>
        <h1 className="text-[54px] font-bold">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
      {/* Cloud Icon Section at Bottom of Adjusted h-screen */}
      <div className="absolute w-full md:-bottom-[75px] -bottom-10 xl:-bottom-1 z-10">
        <CloudIcon />
      </div>
    </div>
  );
};
