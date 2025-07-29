"use client";

import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";

import Link from "next/link";
import { IBlogPage } from "../../../../types/blog";
import CalenderIcon from "../../svg/calender";
import DateFormatRelative from "../../../../utils/date-format-relative";
import ArrowRight from "../../svg/arrow-right";

const Slider = ({ slides }: { slides: IBlogPage[] }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="position-relative w-100 h-100">
      <div className="position-absolute bottom-0 end-0 d-flex gap-2 z-3 p-2 pb-0">
        <button
          ref={prevRef}
          className="p-0 d-flex align-items-center justify-content-center rounded-circle slider-btn mil-a1-bg text-white"
          style={{
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#3B173D";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#7C3980";
          }}
        >
          <ArrowRight isArrowRight={false} />
        </button>
        <button
          ref={nextRef}
          className="p-0 d-flex align-items-center justify-content-center rounded-circle slider-btn mil-a1-bg text-white"
          style={{
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#3B173D";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#7C3980";
          }}
        >
          <ArrowRight isArrowRight />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        onInit={(swiper) => {
          // @ts-expect-error: Swiper types don't recognize dynamic ref assignment
          swiper.params.navigation.prevEl = prevRef.current;

          // @ts-expect-error: Swiper types don't recognize dynamic ref assignment
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        slidesPerView={1}
        loop
        // spaceBetween={20}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="d-flex flex-column gap-2 position-relative w-100 h-100 overflow-hidden rounded">
              <Link
                href={`/blog/${slide?.slug}`}
                className="d-block rounded overflow-hidden slide"
              >
                <Image
                  src={slide?.first_image as string}
                  alt={slide?.title}
                  width={900}
                  height={500}
                  className="w-100 h-100 object-fit-cover rounded"
                />
              </Link>
              <div className="d-flex flex-column gap-1 ps-2">
                <Link
                  href={`/blog/${slide?.slug}`}
                  className="text-white fw-medium"
                  style={{
                    fontSize: "16px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {slide.title}
                </Link>
                <div className="d-flex align-items-center gap-1">
                  <div className="d-flex align-items-center gap-1">
                    <CalenderIcon />
                    <span
                      className="fw-medium mil-a1"
                      style={{ fontSize: "10px", paddingTop: "3px" }}
                    >
                      {slide?.date}
                    </span>
                  </div>

                  <span
                    className="fw-medium small"
                    style={{ color: "#ffffff96" }}
                  >
                    ({DateFormatRelative(slide?.date as string)})
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
