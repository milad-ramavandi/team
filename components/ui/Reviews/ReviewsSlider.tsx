"use client"
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReviewBlog from "./ReviewBlog";
import { reviewsBlogList } from '../../../data/home/reviews-blog-list';

const ReviewsSlider = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <>
      {navReady && (
        <Swiper
          modules={[Navigation, Pagination, Parallax]}
          parallax={true}
          autoHeight={true}
          spaceBetween={120}
          slidesPerView={1}
          initialSlide={1}
          speed={800}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          className="mil-c-swipe mil-c-dark"
        >
          {reviewsBlogList.map((item, index) => (
            <SwiperSlide key={index}>
              <ReviewBlog {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="mil-sr-pagination" ref={paginationRef}></div>
      <div className="mil-rs-nav">
        <div className="mil-slider-btn mil-sr-prev mil-c-gone" ref={prevRef}></div>
        <div className="mil-slider-btn mil-sr-next mil-c-gone" ref={nextRef}></div>
      </div>
    </>
  );
};

export default ReviewsSlider;