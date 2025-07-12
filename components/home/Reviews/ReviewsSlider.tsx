import { IReviewBlog } from "../../../types/reviews-blog";
import ReviewBlog from "./ReviewBlog";

const reviewsBlogList: IReviewBlog[] = [
  {
    imageUrl: "img/reviews/2.jpg",
    author: "Paul Trueman",
    title: "Envato market",
    description:
      "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
  },
  {
    imageUrl: "img/reviews/1.jpg",
    author: "Emma Newman",
    title: "Envato market",
    description:
      "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
  },
  {
    imageUrl: "img/reviews/3.jpg",
    author: "Viktoria Freeman",
    title: "Envato market",
    description:
      " This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
  },
  {
    imageUrl: "img/reviews/4.jpg",
    author: "Oscar Oldman",
    title: "Envato market",
    description:
      "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
  },
];

const ReviewsSlider = () => {
  // useEffect(() => {
  //   const checkLoadedSlider = () => {
  //     if (
  //       typeof window !== "undefined" &&
  //       window.gsap &&
  //       window.ScrollTrigger
  //     ) {
  //       new window.Swiper(".mil-reviews-slider", {
  //         parallax: true,
  //         autoHeight: true,
  //         spaceBetween: 120,
  //         slidesPerView: 1,
  //         initialSlide: 1,
  //         speed: 800,
  //         pagination: {
  //           el: ".mil-sr-pagination",
  //           clickable: true,
  //         },
  //         navigation: {
  //           prevEl: ".mil-sr-prev",
  //           nextEl: ".mil-sr-next",
  //         },
  //         on: {
  //           slideChangeTransitionEnd: function () {
  //             window.ScrollTrigger.refresh();
  //           },
  //         },
  //       });

  //       return true;
  //     }
  //     return false;
  //   };

  //   if (!checkLoadedSlider()) {
  //     const timer = setTimeout(() => {
  //       checkLoadedSlider();
  //     }, 200);

  //     return () => clearTimeout(timer);
  //   }
  // }, []);
  // useEffect(() => {
  //   let posX = 0,
  //     posY = 0;
  //   let mouseX = 0,
  //     mouseY = 0;
  //   const follower = document.querySelector(".mil-cursor-follower");

  //   if (!follower || !window.gsap) return;

  //   const ticker = window.gsap.ticker.add(() => {
  //     posX += (mouseX - posX) / 29;
  //     posY += (mouseY - posY) / 29;
  //     window.gsap.set(follower, {
  //       css: {
  //         left: posX,
  //         top: posY,
  //       },
  //     });
  //   });

  //   function addHoverEffect(selector: string, className: string) {
  //     const links = document.querySelectorAll(selector);
  //     function handleEnter() {
  //       follower?.classList.add(className);
  //     }
  //     function handleLeave() {
  //       follower?.classList.remove(className);
  //     }
  //     links.forEach((link) => {
  //       link.addEventListener("mouseenter", handleEnter);
  //       link.addEventListener("mouseleave", handleLeave);
  //     });

  //     return () => {
  //       links.forEach((link) => {
  //         link.removeEventListener("mouseenter", handleEnter);
  //         link.removeEventListener("mouseleave", handleLeave);
  //       });
  //     };
  //   }

  //   const cleanups = [
  //     addHoverEffect(".mil-c-light", "mil-light-active"),
  //     addHoverEffect(".mil-c-dark", "mil-dark-active"),
  //     addHoverEffect(".mil-c-gone", "mil-gone-active"),
  //     addHoverEffect(".mil-c-view", "mil-view-active"),
  //     addHoverEffect(".mil-c-next", "mil-next-active"),
  //     addHoverEffect(".mil-c-read", "mil-read-active"),
  //     addHoverEffect(".mil-c-swipe", "mil-swipe-active"),
  //   ];

  //   function handleMouseMove(e: MouseEvent) {
  //     mouseX = e.clientX;
  //     mouseY = e.clientY;
  //   }
  //   document.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //     cleanups.forEach((cleanup) => cleanup && cleanup());
  //     window.gsap.ticker.remove(ticker);
  //   };
  // }, []);
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
    </>
  );
};

export default ReviewsSlider;
