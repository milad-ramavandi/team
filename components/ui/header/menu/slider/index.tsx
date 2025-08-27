"use client";

import { useRef, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import SliderCard from "./slider-card";
import { texts } from "../../../../../lib/texts";
import { IBlogCard } from "../../../../../types/blog";
import { ContextHeader } from "../../../../../context/header/ContextHeader";

const blogs: IBlogCard[] = texts?.blogs.slice(0, 4);

const Slider = () => {
  const swiperRef = useRef<{ swiper: SwiperType } | null>(null);
  const contextHeader = useContext(ContextHeader);

  useEffect(() => {
    const nextBtn = document.querySelector(".mil-sb-next") as HTMLElement;
    const prevBtn = document.querySelector(".mil-sb-prev") as HTMLElement;
    const swiperInstance = swiperRef.current?.swiper;

    const handleNext = () => swiperInstance?.slideNext();
    const handlePrev = () => swiperInstance?.slidePrev();

    if (nextBtn && prevBtn && swiperInstance) {
      nextBtn.addEventListener("click", handleNext);
      prevBtn.addEventListener("click", handlePrev);
    }

    return () => {
      nextBtn?.removeEventListener("click", handleNext);
      prevBtn?.removeEventListener("click", handlePrev);
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
        {blogs.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderCard {...item} onClick={contextHeader?.toggleMenu} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
