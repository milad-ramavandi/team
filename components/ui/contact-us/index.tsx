import Link from "next/link";
import { texts } from "../../../lib/texts";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="mil-half-container mil-stl mil-reverse overflow-hidden">
        <div className="mil-text-box mil-g-m4 mil-p-160-160">
          <p className="mil-stylized mil-m2 mil-mb60">
            {texts?.usPage?.contact_us?.p1}
          </p>
          <h2 className="mil-display3 mil-rubber mil-mb60">
            {texts?.usPage?.contact_us?.h2?.span1}
            <span className="mil-a1">
              {texts?.usPage?.contact_us?.h2?.span2}
            </span>
          </h2>
          <div>
            <Link
              href="/contact-us"
              className="mil-btn mil-btn-border mil-m1 mil-c-gone"
            >
              {texts?.usPage?.contact_us?.button}
            </Link>
          </div>
        </div>
        <div className="mil-image-box">
          <div className="mil-image-frame">
            <Image
              fill
              priority
              src="/img/4.jpg"
              alt="img"
              className="mil-scale-img"
              data-value-1="1.20"
              data-value-2="1"
            />
            {/* <div className="mil-overlay"></div> */}
          </div>
        </div>
      </div>
      <div className="row mil-aic mil-jcb mil-no-g">
        <div className="col-lg-6 p-0">
          <div className="mil-button-pad mil-a1 mil-jst d-block"></div>
        </div>
        <div className="col-lg-6 mil-992-gone">
          <div className="mil-text-pad">
            <p className="mil-text-sm">
              {texts?.usPage?.contact_us?.p2?.span1} <br />
              <span className="mil-text-link mil-a2 mil-c-gone">
                {texts?.usPage?.contact_us?.p2?.span2}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
