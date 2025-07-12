import React from "react";
import CircleScroll from "../../home/Banner/CircleScroll";

const Banner = () => {
  return (
    <>
      <div className="mil-p-160-160 mil-mt30">
        <div className="container mil-relative">
          <div className="mil-objects">
            <div className="mil-obj-1"></div>
            <div className="mil-obj-2"></div>
          </div>
          {/* <p className="mil-stylized mil-m2 mil-mb60 mil-tac mil-up">
            Explore our agency
          </p> */}
          <h2 className="mil-head1 mil-rubber mil-tac mil-mb60 mil-up">
            Pixy is a <span className="mil-a1">creative</span> agency that
            transforms <span className="mil-a1">ideas</span> into masterpieces.
            We craft <span className="mil-a1">design</span> magic, breathe new
            life into brands, and make the impossible{" "}
            <span className="mil-a1">possible</span>. Choose{" "}
            <span className="mil-a1">Pixy</span> because we are worth it!
          </h2>

          <div className="d-flex justify-content-end">
            <CircleScroll Goto="#counters" />
          </div>
          {/* <div className="mil-text-with-button mil-mb60">
            <p className="mil-text-sm mil-tar mil-768-tac mil-up">
              We've been working for several years to build a portfolio <br />
              that truly reflects our diversity.
            </p>
            <span className="mil-up">
              <a
                href="portfolio-1-frl.html"
                className="mil-btn mil-a2 mil-c-gone"
              >
                View portfolio
              </a>
            </span>
          </div> */}
        </div>
        {/* <div className="mil-tapes-frame">
          <div
            className="mil-tape-1 mil-parallax-x-img"
            data-value-1="0"
            data-value-2="20%"
          >
            <div className="mil-btn mil-btn-border">Reliable Service</div>
            <div className="mil-btn mil-btn-border">Custom Solutions</div>
            <div className="mil-btn mil-btn-border">24/7 Availability</div>
            <div className="mil-btn mil-btn-border">Expert Guidance</div>
            <div className="mil-btn mil-btn-border">Innovative Approach</div>
            <div className="mil-btn mil-btn-border">
              Satisfaction Guaranteed
            </div>
            <div className="mil-btn mil-btn-border">Industry Experience</div>
            <div className="mil-btn mil-btn-border">Expert Guidance</div>
          </div>
          <div
            className="mil-tape-2 mil-parallax-x-img"
            data-value-1="0"
            data-value-2="-20%"
          >
            <h4 className="mil-head4">Comprehensive Support</h4>
            <h4 className="mil-head4">Cutting-Edge Technology</h4>
            <h4 className="mil-head4">Tailored Strategies</h4>
            <h4 className="mil-head4">Proven Track Record</h4>
            <h4 className="mil-head4">Sustainable Practices</h4>
            <h4 className="mil-head4">Global Reach</h4>
            <h4 className="mil-head4">Cost Efficiency</h4>
            <h4 className="mil-head4">Proven Track Record</h4>
          </div>
          <div className="mil-deco mil-up">
            <img
              src="img/shapes/4.png"
              alt="shape"
              className="mil-parallax-img"
              data-value-1="20%"
              data-value-2="50%"
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Banner;
