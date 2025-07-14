"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MenuSliderCard from "./MenuSliderCard";
import { blogsList } from "../../../../data/blogs-list";



const MenuSlider = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const nextBtn = document.querySelector(".mil-sb-next") as HTMLElement;
    const prevBtn = document.querySelector(".mil-sb-prev") as HTMLElement;

    if (nextBtn && prevBtn && swiperRef.current) {
      nextBtn.addEventListener("click", () =>
        swiperRef.current.swiper.slideNext()
      );
      prevBtn.addEventListener("click", () =>
        swiperRef.current.swiper.slidePrev()
      );
    }

    return () => {
      nextBtn?.removeEventListener("click", () =>
        swiperRef.current?.swiper.slideNext()
      );
      prevBtn?.removeEventListener("click", () =>
        swiperRef.current?.swiper.slidePrev()
      );
    };
  }, []);

  return (
    <div className="mil-blog-slider-sm">
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogsList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <MenuSliderCard {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MenuSlider;
