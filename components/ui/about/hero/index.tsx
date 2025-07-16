import { texts } from "../../../../lib/texts";
import Breadcrumb from "../../breadcrumb";
import CircleScroll from "../../circle-scroll";

const Hero = () => {
  return (
    <div className="container d-flex flex-column text-center mil-mt180 overflow-hidden">
      <Breadcrumb />
      <h1 className="mil-disolay-4 mil-mb40 w-100 text-center">
        {texts?.aboutPage?.hero?.heading1} <span className="mil-a1">{texts?.aboutPage?.hero?.span1}</span> {texts?.aboutPage?.hero?.heading2} <span className="mil-a1">{texts?.aboutPage?.hero?.span2}</span> {texts?.aboutPage?.hero?.heading3} <span className="mil-a1">{texts?.aboutPage?.hero?.span3}</span> {texts?.aboutPage?.hero?.heading4}{" "}
        <span className="mil-a1">{texts?.aboutPage?.hero?.span4}</span>. {texts?.aboutPage?.hero?.heading5}{" "}
        <span className="mil-a1">{texts?.aboutPage?.hero?.span5}</span> {texts?.aboutPage?.hero?.heading6}
      </h1>
      <CircleScroll Goto="#counters" isRight />
    </div>
  );
};

export default Hero;
