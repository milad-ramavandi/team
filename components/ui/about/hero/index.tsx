import CircleScroll from "../../circle-scroll";

const Hero = () => {
  return (
    <>
      <div className="mil-p-160-160 mil-mt30">
        <div className="container mil-relative">
          <div className="mil-objects">
            <div className="mil-obj-1"></div>
            <div className="mil-obj-2"></div>
          </div>
          <h2 className="mil-head1 mil-tac mil-mb60">
            Pixy is a <span className="mil-a1">creative</span> agency that
            transforms <span className="mil-a1">ideas</span> into masterpieces.
            We craft <span className="mil-a1">design</span> magic, breathe new
            life into brands, and make the impossible{" "}
            <span className="mil-a1">possible</span>. Choose{" "}
            <span className="mil-a1">Pixy</span> because we are worth it!
          </h2>

          <div className="d-flex justify-content-end">
            <CircleScroll Goto="#counters" className="bg-transparent"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
