import React from "react";

const CallAction = () => {
  return (
    <div className="container">
      <div className="mil-half-container mil-stl">
        <div className="mil-text-box mil-g-m4 mil-p-160-160">
          <p className="mil-stylized mil-m2 mil-mb60">Portfolio</p>
          <h2 className="mil-display3 mil-rubber mil-mb60 mil-m1">
            Explore our <span className="mil-a1">portfolio</span> and get
            inspired
          </h2>
          <div>
            <a
              href="portfolio-3-stl.html"
              className="mil-btn mil-btn-border mil-m1 mil-c-gone"
            >
              View portfolio
            </a>
          </div>
        </div>
        <div className="mil-image-box">
          <div className="mil-image-frame">
            <img
              src="/img/pages/5 2.jpg"
              alt="img"
              className="mil-scale-img"
              data-value-1="1.20"
              data-value-2="1"
            />
          </div>
        </div>
      </div>
      <div className="row mil-aic mil-jcb mil-no-g">
        <div className="col-lg-6 p-0">
          <div
            className="mil-button-pad mil-a1 mil-jst d-block"
          ></div>
        </div>
        <div className="col-lg-6 mil-992-gone">
          <div className="mil-text-pad">
            <p className="mil-stylized">
              Designing a Better World Today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallAction;
