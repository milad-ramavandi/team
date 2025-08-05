import Link from "next/link";
import { IMember } from "../../../../../types/team";
import CircleScroll from "../../../circle-scroll";
import Image from "next/image";

const Hero = ({ userData }: { userData: IMember }) => {
  return (
    <div className="mil-hero-6" id="top">
      <div className="mil-overlay"></div>
      <div className="container mil-hero-main mil-relative">
        <div className="row mil-jcb">
          <div className="col-lg-6">
            <div className="mil-hero-text">
              <div className="mil-text-pad"></div>
              <div>
                <i className="far fa-hand-peace mil-mb30"></i>
                <p className="mil-stylized mil-m2 mil-mb60">
                  Welcome my friend!
                </p>
                <h1 className="mil-mb60 mil-display3">
                  my name is <br />{" "}
                  <span className="mil-a1">{userData?.name}</span>, <br /> a{" "}
                  {`${userData?.career}`}
                </h1>
                <Link
                  href="files/cv.txt"
                  download="cv"
                  className="mil-btn mil-btn-border mil-c-gone"
                >
                  Download cv
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-hero-portrait-frame">
              <div className="mil-hero-portrait">
                <Image
                  fill
                  priority
                  src={userData?.imageUrl}
                  alt="portrait"
                  className="mil-scale-img"
                  data-value-1=".7"
                  data-value-2="1.2"
                />
              </div>
              <CircleScroll Goto="#aboutme" />
            </div>
          </div>
        </div>
      </div>
      <div className="mil-tapes-frame">
        <div
          className="mil-tape-2 mil-parallax-x-img"
          data-value-1="0"
          data-value-2="-20%"
        >
          <h4 className="mil-head4">Branding and Identity Design</h4>
          <h4 className="mil-head4">Website Design and Development</h4>
          <h4 className="mil-head4">Creative Consulting</h4>
          <h4 className="mil-head4">Branding and Identity Design</h4>
          <h4 className="mil-head4">Website Design and Development</h4>
          <h4 className="mil-head4">Creative Consulting</h4>
          <h4 className="mil-head4">Branding and Identity Design</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
