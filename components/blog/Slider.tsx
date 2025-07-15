"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SliderCard from "./SliderCard";
import "swiper/css";
import "swiper/css/navigation";

export default function Slider() {
  const swiperRef = useRef<any>(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidesData = [
    {
      imageSrc: "/img/blog/9.jpg",
      category: "design",
      date: "29.08.24",
      title: "How to Become a Graphic Designer in 10 Simple Steps",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae.",
      link: "publication-stl.html",
    },
    {
      imageSrc: "/img/blog/10.jpg",
      category: "Branding",
      date: "29.08.24",
      title: "10 Essential Tools Every Graphic Designer Should Master",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae.",
      link: "publication-stl.html",
    },
    {
      imageSrc: "/img/blog/11.jpg",
      category: "Art",
      date: "29.08.24",
      title: "From Concept to Creation: The Design Process Explained",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae.",
      link: "publication-stl.html",
    },
    {
      imageSrc: "/img/blog/12.jpg",
      category: "Interior",
      date: "29.08.24",
      title: "The Ultimate Guide to UI/UX Design for Beginners",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae.",
      link: "publication-stl.html",
    },
  ];

  return (
    <div className="mil-p-0-160">
      <div className="container">
        <div className="row mil-aie mil-mb30">
          <div className="col-md-6">
            <h2 className="mil-head1 mil-mb60 mil-up-removed">
              Popular <span className="mil-a2">Publications</span>
            </h2>
          </div>
          <div className="col-md-6">
            <div className="mil-nl-nav mil-up-removed mil-mb60">
              <div
                className="mil-slider-btn mil-nl-prev mil-c-gone"
                onClick={handlePrev}
                role="button"
                aria-label="Previous slide"
              ></div>
              <div
                className="mil-slider-btn mil-nl-next mil-c-gone"
                onClick={handleNext}
                role="button"
                aria-label="Next slide"
              ></div>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          ref={swiperRef}
          className="mil-blog-slider"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <SliderCard
                imageSrc={slide.imageSrc}
                category={slide.category}
                date={slide.date}
                title={slide.title}
                description={slide.description}
                link={slide.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
