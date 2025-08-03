import { texts } from "../../../../../lib/texts";


const AboutMe = () => {
  return (
    <div className="mil-p-160-100 mil-bug-fix" id="aboutme">
      <div className="container">
        <div className="row mil-jcb">
          <div className="col-lg-4">
            <h2 className="mil-head1 mil-mb60">
              {texts.homePage.aboutMe.h2.span1}<br />
              {texts.homePage.aboutMe.h2.span2}<span className="mil-a2">
              {texts.homePage.aboutMe.h2.span3}</span>
            </h2>
            <p className="mil-text-sm mil-deco-text mil-mb60">
              {texts.homePage.aboutMe.p1.span1}<span className="mil-a2">{texts.homePage.aboutMe.p1.span2}</span> {texts.homePage.aboutMe.p1.span3}
            </p>
          </div>
          <div className="col-lg-6">
            <p className="mil-text-md mil-mb30">
              {texts.homePage.aboutMe.p2}
            </p>
            <p className="mil-text-md mil-mb60">
             {texts.homePage.aboutMe.p3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
