import CircleScroll from "../../circle-scroll";

const Hero = () => {
  return (
    <div className="mil-hero-5">
      <div className="mil-overlay"></div>
      <div className="container mil-hero-main mil-relative">
        <div className="mil-hero-text mil-tac">
          <h1 className="mil-disolay-4 mil-mb40">
            Pixy is a <span className="mil-a1">creative</span> agency that
            transforms <span className="mil-a1">ideas</span> into masterpieces.
            We craft <span className="mil-a1">design</span> magic, breathe new
            life into brands, and make the impossible{" "}
            <span className="mil-a1">possible</span>. Choose{" "}
            <span className="mil-a1">Pixy</span> because we are worth it!
          </h1>
          <CircleScroll Goto="#counters" isRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
