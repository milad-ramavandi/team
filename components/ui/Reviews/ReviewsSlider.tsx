"use client";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "../../../public/css/style-stylish.css";
import ReviewBlog from "./ReviewBlog";
import { reviewsBlogList } from "../../../data/home/reviews-blog-list";
import Script from "next/script";



const ReviewsSlider = () => {
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
            return <ReviewBlog key={index} {...item} />;
          })}
        </div>
      </div>
      <div className="mil-sr-pagination"></div>
      <div className="mil-rs-nav">
        <div className="mil-slider-btn mil-sr-prev mil-c-gone"></div>
        <div className="mil-slider-btn mil-sr-next mil-c-gone"></div>
      </div>
      <Script strategy={'beforeInteractive'} src="../js/plugins/swiper.min.js"></Script>
    </>
  );
};

export default ReviewsSlider;
