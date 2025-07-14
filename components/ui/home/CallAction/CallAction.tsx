import React from "react";

const CallAction = () => {
  return (
    <div className="container overflow-hidden" id="contact">
      <div className="mil-half-container mil-stl">
        <div className="mil-text-box mil-g-m4 mil-p-160-160">
          <p className="mil-stylized mil-m2 mil-mb60">Contact</p>
          <h2 className="mil-display3 mil-mb60 mil-m1">
            Let’s <span className="mil-a1">make </span> <br />
            an <span className="mil-a1">impact </span>
            <br />
            together.
          </h2>
          <p className="mil-text-md mil-deco-text mil-shortened">
            Welcome to <span className="mil-a2">PIXY</span> where your ideas
            come to life. We specialize in crafting unique brands, captivating
            advertising campaigns, and effective digital strategies.
          </p>
        </div>
        <div className="mil-image-box">
          <div className="mil-image-frame">
            {/* <img
              src="img/pages/1.jpg"
              alt="img"
              className="mil-scale-img"
              data-value-1="1.20"
              data-value-2="1"
            /> */}
            <video
              // className="mil-scale-img"
              data-value-1="1"
              data-value-2="1.1"
              autoPlay
              loop
              muted
            //   playsInline
            //   preload="auto"
            >
              <source src="img/pages/3.mp4" />
            </video>
            <div className="mil-overlay"></div>
          </div>
        </div>
      </div>
      <div className="row mil-aic mil-jcb mil-no-g">
        <div className="col-lg-4 mil-992-gone">
          <p className="mil-text-sm">
            We accept your requests 24/7. Feel free to{" "}
            <a
              // href="contact-stl.html"
              href="#home"
              className="mil-text-link mil-a2 mil-c-gone"
            >
              write to us
            </a>{" "}
            whenever it is convenient for you
          </p>
        </div>
        <div className="col-lg-6 p-0">
          <div className="mil-button-pad mil-a2">
            <span>
              <a
                // href="contact-stl.html"
                href="#home"
                className="mil-btn mil-btn-border mil-m1 mil-c-gone"
              >
                Get in touch
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="row mil-aic mil-jcb mil-no-g mil-992-gone">
        <div className="col-lg-6 p-0">
          <div
            className="mil-button-pad mil-a1 mil-jst d-block"
          ></div>
        </div>
        <div className="col-lg-6 mil-992-gone"></div>
      </div>
    </div>
  );
};

export default CallAction;
