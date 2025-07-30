import { texts } from "../../../../lib/texts";
import Breadcrumb from "../../breadcrumb";

const Hero = () => {
  return (
    <div className="container d-flex flex-column text-center mil-mt180 overflow-hidden mil-relative">
      <Breadcrumb />
      <h1 className="mil-display3 mil-mb40 w-100 text-center">
        {texts?.usPage?.hero?.heading1}{" "}
        <span className="mil-a1">{texts?.usPage?.hero?.span1}</span>{" "}
        {texts?.usPage?.hero?.heading2}{" "}
        <span className="mil-a1">{texts?.usPage?.hero?.span2}</span>{" "}
        {texts?.usPage?.hero?.heading3}{" "}
        <span className="mil-a1">{texts?.usPage?.hero?.span3}</span>{" "}
      </h1>
    </div>
  );
};

export default Hero;
