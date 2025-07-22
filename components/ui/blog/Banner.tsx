import { texts } from "../../../lib/texts";
import Breadcrumb from "../breadcrumb";


export default function Banner() {
  return (
    <>
      {/* <div className="mil-hero-1 mil-sm-hero mil-stl mil-up-removed" id="top">
        <div className="mil-overlay"></div>
        <div className="container mil-hero-main mil-relative mil-aic">
          <div
            className="mil-hero-text mil-scale-img"
            data-value-1="1.3"
            data-value-2="0.95"
          >
            <div className="mil-text-pad"></div>
            <Breadcrumb />
            <h1 className="mil-display2 ">{texts?.blogPage?.banner?.h1}</h1>
          </div>
        </div>
      </div> */}
      <div className="container d-flex flex-column text-center mil-mt180 overflow-hidden mil-relative">
        <Breadcrumb />

        <h1 className="mil-display4 mil-mb130 w-100 text-center">
          {texts?.blogPage?.banner?.h1}
        </h1>
      </div>
    </>
  );
}
