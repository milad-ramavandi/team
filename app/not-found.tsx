import Link from "next/link";
import BackToHomeCircle from "../components/ui/svg/BackToHomeCircle";
export default function NotFoundPage() {
  return (
    <div className="mil-transition-fade" id="swup">
      <div className="mil-transition-frame">
        <div id="smooth-content" className="mil-content">
          <div className="mil-hero-4" id="top">
            <div id="scene" className="mil-hero-scene">
              <div className="mil-anim-frame" data-depth="0.25">
                <img
                  src="img/shapes/6.png"
                  alt="shapes"
                  className="mil-hero-animation"
                  data-depth="0.25"
                />
              </div>
              <div className="mil-pad-frame" data-depth="0.35">
                <div className="mil-shape-pad"></div>
              </div>
            </div>
            <div className="mil-overlay"></div>
            <div className="container mil-hero-main position-relative">
              <div className="mil-hero-text">
                <i className="far fa-poop mil-mb15"></i>
                <p className="mil-stylized mil-m2 mil-mb30">oops!</p>
                <h1 className="mil-display1 mil-mb30">404</h1>
                <h1 className="mil-head2 mil-a1">Looks like you got lost</h1>
                <div className="mil-circle-text-frame">
                  <Link href="/" className="mil-circle-text mil-c-gone">
                    <BackToHomeCircle />
                    <span className="mil-arrow">
                      <i
                        className="fal fa-arrow-down"
                        style={{ transform: "rotate(90deg)" }}
                      ></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
