import CircleScroll from "./CircleScroll";

const Banner = () => {
  return (
    <>
      <div className="mil-hero-5 mil-up" id="top">
        <img
          src="img/home-5/1.jpg"
          alt="hero image"
          className="mil-hero-image mil-scale-img"
          data-value-1=".6"
          data-value-2="1.2"
        />
        <div className="mil-overlay"></div>
        <div className="container mil-hero-main mil-relative">
          <div className="mil-hero-text mil-tac">
            <div
              className="mil-scale-img"
              data-value-1="1.3"
              data-value-2="0.95"
            >
              {/* <i className="fal fa-award mil-mb15"></i>
            <p className="mil-stylized mil-m2 mil-mb60">
              We are what 
              <br />
              we think
            </p> */}
              <h1 className="mil-display4 mil-rubber mil-mb40">
                Develop Ideas into <br />
                Digital Reality
              </h1>
            </div>
            <CircleScroll Goto="#aboutme"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
