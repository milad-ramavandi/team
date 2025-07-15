import Breadcrumb from "../../breadcrumb";
import CircleScroll from "../../circle-scroll";

const Hero = () => {
  return (
    <div className="container d-flex flex-column text-center mil-hero-about-mt180 overflow-hidden">
      <Breadcrumb />
      <h1 className="mil-disolay-4 mil-mb40 w-100 text-center">
        Pixy is a <span className="mil-a1">creative</span> agency that
        transforms <span className="mil-a1">ideas</span> into masterpieces. We
        craft <span className="mil-a1">design</span> magic, breathe new life
        into brands, and make the impossible{" "}
        <span className="mil-a1">possible</span>. Choose{" "}
        <span className="mil-a1">Pixy</span> because we are worth it!
      </h1>
      <CircleScroll Goto="#counters" isRight />
    </div>
  );
};

export default Hero;
