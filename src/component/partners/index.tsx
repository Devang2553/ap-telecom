import Slider from "react-slick";
import {
  AjhuaIcon,
  BsaIcon,
  CloudIcon,
  DownerIcon,
  FultonHogonIcon,
  HiLookIcon,
  HiVisionIcon,
  NbnIcon,
  ServiceStreamIcon,
  Ventia,
  VisionStream,
} from "../../assets/index";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./partner.css";

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
    <div>
      {/* <div className="overflow-x-hidden md:hidden  h-full  bg-[#0A5EB0] ">
        <svg
          width="100vw"
          className=""
          height="45"
          viewBox="0 0 1440 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1686.62 16.7288C1612.12 16.7288 1577.95 59.1029 1577.95 59.1029C1577.95 59.1029 1553.35 35.182 1515.07 52.9518C1452.88 80.9734 1485 144.535 1485 144.535C1485 144.535 1476.8 145.901 1472.01 150.686C1467.91 155.47 1468.6 163.671 1468.6 163.671C1468.6 163.671 1461.76 160.254 1452.88 162.304C1443.99 164.355 1441.94 171.873 1441.94 171.873C1441.94 171.873 1444.68 148.635 1431.69 137.7C1405.04 114.463 1374.96 136.333 1374.96 136.333C1374.96 136.333 1370.86 131.549 1368.81 130.182C1366.08 128.815 1360.61 128.815 1360.61 128.815C1360.61 128.815 1330.54 104.211 1282.01 111.045C1233.49 117.88 1210.94 165.038 1210.94 165.038C1210.94 165.038 1207.52 142.484 1184.28 131.549C1151.47 115.146 1133.7 131.549 1133.7 131.549C1133.7 131.549 1150.11 103.527 1120.72 87.8079C1091.33 72.0885 1078.35 96.0093 1078.35 96.0093C1078.35 96.0093 1072.19 92.5921 1063.99 92.5921C1055.79 92.5921 1048.27 100.11 1048.27 100.11C1048.27 100.11 1048.96 95.3259 1040.76 92.5921C1032.55 89.8583 1027.09 92.5921 1027.09 92.5921C1027.09 92.5921 1051.69 46.1173 1003.17 31.7647C962.158 19.4626 949.173 49.5345 945.755 59.1029C945.072 57.0525 943.022 54.3187 939.604 51.5849C932.77 46.8007 930.719 48.1676 930.719 48.1676C930.719 48.1676 937.554 20.8295 919.101 12.6281C900.647 4.42662 890.396 20.146 890.396 20.146C890.396 20.146 869.209 13.3115 851.439 29.7144C833.669 46.1173 837.086 67.3043 837.086 67.3043C837.086 67.3043 830.935 67.3043 822.734 72.0885C814.532 76.8727 813.165 83.7072 813.165 83.7072C813.165 83.7072 801.547 75.5058 783.777 75.5058C766.007 75.5058 753.022 83.7072 753.022 83.7072C753.022 83.7072 748.237 73.4554 733.885 67.3043C719.532 61.1532 706.547 67.3043 706.547 67.3043C706.547 67.3043 724.317 26.9806 674.424 5.79352C624.532 -15.3935 588.309 28.3475 588.309 28.3475C588.309 28.3475 582.158 28.3475 575.324 29.7144C569.173 31.0813 565.072 35.8655 565.072 35.8655C565.072 35.8655 549.353 13.3115 518.597 19.4626C487.842 25.6137 479.64 58.4194 479.64 58.4194C479.64 58.4194 460.504 24.2468 395.576 31.7647C330.647 39.2827 319.712 72.7719 319.712 72.7719C319.712 72.7719 311.511 63.2036 292.374 67.9878C286.906 69.3547 283.489 71.405 280.072 74.1388C273.921 59.7863 261.619 40.6496 237.698 44.0669C215.827 46.8007 210.36 59.1029 210.36 59.1029C210.36 59.1029 206.942 54.3187 202.158 54.3187H192.59C192.59 54.3187 189.173 48.1676 180.971 44.7504C172.77 41.3331 164.568 44.7504 164.568 44.7504C164.568 44.7504 148.165 36.5489 132.446 44.7504C116.727 52.9518 111.259 72.7719 111.259 72.7719C111.259 72.7719 99.6403 63.2036 86.6547 67.9878C73.6691 72.7719 73.6691 87.1245 73.6691 87.1245C73.6691 87.1245 70.2518 83.7072 62.0504 85.7576C53.8489 87.1245 52.482 90.5417 52.482 90.5417C52.482 90.5417 47.6978 74.8223 33.3453 71.405C18.9928 67.9878 3.95683 72.7719 3.95683 72.7719C3.95683 72.7719 -7.66187 38.5993 -71.9065 31.7647C-97.8777 29.0309 -117.014 33.1316 -130 38.5993V183.491H1807.59V68.6712C1801.44 70.0381 1796.65 71.405 1796.65 71.405C1796.65 71.405 1761.11 16.7288 1686.62 16.7288Z"
            fill="white"
          />
        </svg>{" "}
      </div> */}

      <div className="overflow-x-hidden   w-full  h-full  bg-[#0A5EB0] ">
        <CloudIcon />
      </div>

      <div className="flex flex-col items-center w-full justify-center h-fit   mb-20">
        <h1 className="font-extrabold text-3xl text-center md:text-[40px] ">
          PROUD MARKETING <span className="text-[#0A5EB0]">PARTNERS</span> WITH
        </h1>
        <div className="px-5 md:px-12 pt-7 flex mt-10  justify-center w-full  gap-3 flex-wrap lg:flex-nowrap md:flex-row items-center ">
          {/* {array?.map((x) => (
            <div
              key={x.id}
              className="min-w-80 md:min-w-0  flex items-center justify-center "
            >
              {x.image}
            </div>
          ))} */}

          <ImageSlider array={array} />
        </div>
      </div>
    </div>
  );
};

const ImageSlider = ({ array }) => {
  const settings = {
    dots: false,
    infinite: true,

    speed: 500,
    slidesToShow: 5,
    // fade: true,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="px-5 md:px-12 pt-7 mt-10 w-full  flex items-center justify-center">
      <Slider {...settings} className="w-full flex items-center justify-center">
        {array?.map((x) => (
          <div
            key={x.id}
            className="flex items-center justify-center  w-20  h-full  "
          >
            {/* <img src={x.image} alt="" className="w-full h-auto object-cover" /> */}
            <div className="flex items-center justify-center w-fit h-[40px] ">
              {x.image}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
