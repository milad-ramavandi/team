"use client";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { IReviewBlog } from "../../../../types/reviews-blog";
import SliderCard from "./slider-card";


const Slider = ({reviewsBlogList, isTitle}: {reviewsBlogList: IReviewBlog[], isTitle?:boolean}) => {
  useEffect(() => {
    if (window.Swiper) {
      new window.Swiper(".mil-reviews-slider", {
        parallax: true,
        autoHeight: true,
        spaceBetween: 120,
        slidesPerView: 1,
        initialSlide: 1,
        speed: 800,
        pagination: {
          el: ".mil-sr-pagination",
          clickable: true,
        },
        navigation: {
          prevEl: ".mil-sr-prev",
          nextEl: ".mil-sr-next",
        },
        on: {
          slideChangeTransitionEnd: function () {
            window.ScrollTrigger?.refresh();
          },
        },
      });
    }
  }, []);

  return (
    <>
      <div className="swiper-container mil-reviews-slider mil-c-swipe mil-c-dark">
        <div className="swiper-wrapper">
          {reviewsBlogList.map((item, index) => {
            return <SliderCard key={index} {...item} isTitle={isTitle} />;
          })}
        </div>
      </div>
      <div className="mil-sr-pagination"></div>
      <div className="mil-rs-nav">
        <div className="mil-slider-btn mil-sr-prev mil-c-gone"></div>
        <div className="mil-slider-btn mil-sr-next mil-c-gone"></div>
      </div>
    </>
  );
};

export default Slider;
