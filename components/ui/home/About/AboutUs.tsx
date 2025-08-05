import Link from "next/link";
import { texts } from "../../../../lib/texts";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row mil-jcb mil-aic">
        <div className="col-lg-5 mil-mb130">
          <p className="mil-stylized mil-m2 mil-mb60">{texts?.homePage?.aboutUS?.p}</p>
          <h2 className="mil-head1 mil-mb60">
            {texts.homePage.aboutUS.h2.span1}
            <br />
            {texts.homePage.aboutUS.h2.span2}
            <span className="mil-a1">{texts.homePage.aboutUS.h2.span3}</span>
          </h2>
          <p className="mil-text-md mil-mb30">{texts.homePage.aboutUS.p1}</p>
          <p className="mil-text-md mil-mb60">{texts.homePage.aboutUS.p2}</p>
          <div className="mil-team-quote">
            <div className="mil-portrait">
              <Image
                width={240}
                height={240}
                priority
                src="/img/team/ceo.jpg"
                alt="SEO portrait"
              />
            </div>
            <p className="mil-text-md mil-m1">
              <span className="mil-bold">
                {texts.homePage.aboutUS.p3.span1}
              </span>
              {texts.homePage.aboutUS.p3.span2} <br />
              <span className="mil-bold">
                {texts.homePage.aboutUS.p3.span3}
              </span>
              {texts.homePage.aboutUS.p3.span4}
            </p>
          </div>
        </div>
        <div className="col-lg-6 mil-mb160">
          <div className="mil-about-img-frame">
            <div className="mil-about-img">
              <Image
                width={992}
                height={1347}
                priority
                src="/img/home-5/2.jpg"
                alt="About"
                // className="mil-scale-img"
                data-value-1="1.25"
                data-value-2="1"
              />
            </div>
            <div className="mil-button-box">
              <div>
                <Link href="/us" className="mil-btn mil-btn-border mil-c-gone">
                  {texts.homePage.aboutUS.button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
