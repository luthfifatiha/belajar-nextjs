// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

//swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//required modules
import { Pagination } from "swiper";

//arrow
import { BsArrowRight } from "react-icons/bs";

//image
import Image from "next/image";

//swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <div className="flex items-center justify-center overflow-hidden relative group">
                      {/* images */}
                      <Image
                        src={image.path}
                        width={600}
                        height={400}
                        alt=""
                        className=""
                      />
                      {/* overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 group-hover:backdrop-blur-sm"></div>
                      {/* title */}
                      <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-[38px]  group-hover:xl:-translate-y-24 transition-all duration-500">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div>LIVE PROJECT</div>
                          {/* icons */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-500 delay-200"><BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
