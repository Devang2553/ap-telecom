import { useEffect, useRef, useState } from "react";
// @ts-ignore
import "swiper/css";
// @ts-ignore 
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import QuoteIcon from "/Quote.png";
import QuoteIcon2 from "/Quote2.png";
import Avatar from '../../assets/avatar12.png'


const TestimonialSlider = ({ testimonials }: any) => {
  const swiperRef: any = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <div className="w-full px-10">
      <h2 className="text-[18px] font-semibold text-blue-800 mb-4">
        TESTIMONIAL
      </h2>
      <h3 className="lg:text-[40px] text-xl font-bold mb-24 lg:mb-8 text-gray-800 md:leading-10">
        See What Others Have <br /> to Say About Us
      </h3>

      <div className="relative">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial: any, index: any) => (
            <SwiperSlide key={index}>
              <div
                className={`relative p-6 py-10 shadow-md transition duration-300 ease-in-out transform h-full ${
                  index === swiperRef.current?.swiper.realIndex+1 ? "bg-[#0A5EB0] text-white" : "bg-[#F7F9FC]"
                }`}
              >
                {/* Quote Icon */}
                <div>
                  <img
                    src={index === swiperRef.current?.swiper.realIndex+1 ? QuoteIcon : QuoteIcon2}
                    alt="Quote Icon"
                    className="w-14 h-12 mb-4"
                  />
                </div>

                {/* Feedback Text */}
                <p className="text-sm mb-6">{testimonial.feedback}</p>

                {/* Down Arrow */}
                <div className="absolute bottom-[-14px] left-[10%] transform -translate-x-1/2">
                    <div
                    className={`w-0 h-0 border-t-[15px] ${
                      index === swiperRef.current?.swiper.realIndex+1
                      ? "border-t-[#0A5EB0]"
                      : "border-t-[#F7F9FC]"
                    } border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent`}
                    ></div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8 ml-10">
                <img
                  src={Avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p
                    className={`text-sm font-medium ${
                      index === swiperRef.current?.swiper.realIndex+1 ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="absolute -top-20 right-4 flex gap-2 z-10">
          {/* Previous Button */}
          <button
            className={`custom-swiper-button-prev p-2 px-3  focus:outline-none transition ${
              isBeginning
                ? "bg-[#EBF6FF]  text-[#0A5EB0]"
                : "bg-[#0A5EB0] text-white hover:bg-[#0A5EB0]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={isBeginning ? "blue" : "white"}
              className="w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className={`custom-swiper-button-next -rotate-180 p-2 shado focus:outline-none transition ${
              isEnd
                ? "bg-[#EBF6FF]  text-[#0A5EB0]"
                : "bg-[#0A5EB0] text-white hover:bg-[#0A5EB0]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={isEnd ? "blue" : "white"}
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
