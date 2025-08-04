import CircleScroll from "../../circle-scroll";
import { texts } from "../../../../lib/texts";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mil-hero-5">
      <Image
        width={1920}
        height={1205}
        priority
        src="/img/home-5/1.jpg"
        alt="hero image"
        className="mil-hero-image"
        data-value-1=".6"
        data-value-2="1.2"
      />
      <div className="mil-overlay"></div>
      <div className="container mil-hero-main mil-relative">
        <div className="mil-hero-text mil-tac">
          <div
            // className="mil-scale-img"
            data-value-1="1.3"
            data-value-2="0.95"
          >
            <h1 className={`mil-display4 mil-mb40`}>
              {texts.homePage.hero.heading1}
              <br /> {texts.homePage.hero.heading2}
            </h1>
          </div>
          <CircleScroll Goto="#aboutme" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
