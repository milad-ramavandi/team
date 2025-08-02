import { texts } from "../../../../lib/texts";
import Breadcrumb from "../../breadcrumb";

const Hero = () => {
  return (
    <div className="container d-flex flex-column text-center mil-mt180 overflow-hidden mil-relative">
      <Breadcrumb />
      <h1 className="mil-display2 mil-mb130 w-100 text-center">
        {texts?.portfolioPage?.h1?.span1}{" "}
        <span className="mil-a1">{texts?.portfolioPage?.h1?.span2}</span>
      </h1>
    </div>
  );
};

export default Hero;
