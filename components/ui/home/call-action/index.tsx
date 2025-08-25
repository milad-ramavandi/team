import { texts } from "../../../../lib/texts";
import Link from "next/link";

const CallAction = () => {
  return (
    <div className="overflow-hidden">
      <div className="mil-half-container mil-stl">
        <div className="mil-text-box mil-g-m4 mil-p-160-160 ps-5">
          <p className="mil-stylized mil-m2 mil-mb60">
            {texts.homePage.callaction.title}
          </p>
          <h2 className="mil-display3 mil-mb60 mil-m1">
            {texts.homePage.callaction.h2.span1}
            <span className="mil-a1">
              {texts.homePage.callaction.h2.span2}
            </span>{" "}
            <br />
            {texts.homePage.callaction.h2.span3}
            {/* <span className="mil-a1">{texts.homePage.callaction.h2.span4}</span> */}
            <br />
            {texts.homePage.callaction.h2.span4}
          </h2>
          <p className="mil-text-md mil-deco-text mil-shortened">
            {texts.homePage.callaction.p1.span1}
            <span className="mil-a2">{texts.homePage.callaction.p1.span2}</span>
            {texts.homePage.callaction.p1.span3}
          </p>
        </div>
        <div className="mil-image-box">
          <div className="mil-image-frame">
            {/* <Image
              width={992}
              height={1347}
              priority
              src="/img/2.jpg"
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
              playsInline
              preload="auto"
            >
              <source src="/video/1.mp4" />
            </video>
            {/* <div className="mil-overlay"></div> */}
          </div>
        </div>
      </div>
      <div className="row mil-aic mil-jcb mil-no-g overflow-hidden">
        <div className="col-lg-4 mil-992-gone">
          <p className="mil-text-sm">
            {texts.homePage.callaction.p2.span1}
            <Link
              href="/contact-us"
              className="mil-text-link mil-a2 mil-c-gone"
            >
              {texts.homePage.callaction.p2.span2}
            </Link>
            {texts.homePage.callaction.p2.span3}
          </p>
        </div>
        <div className="col-lg-6 p-0">
          <div className="mil-button-pad mil-a2">
            <span>
              <Link
                href="/contact-us"
                className="mil-btn mil-btn-border mil-m1 mil-c-gone"
              >
                {texts.homePage.callaction.button}
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="mil-half-container mil-aic mil-jcb mil-992-gone">
        <div className="col-lg-6 p-0">
          <div className="mil-button-pad mil-a1 mil-jst d-block"></div>
        </div>
        <div className="col-lg-6 mil-992-gone"></div>
      </div>
    </div>
  );
};

export default CallAction;
