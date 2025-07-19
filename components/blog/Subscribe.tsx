import Link from "next/link";
import { texts } from "../../lib/texts";

export default function Subscribe() {
  return (
    <>
      <div className="container">
        <div className="mil-half-container mil-stl mil-reverse mil-up-removed">
          <div className="mil-text-box mil-g-m4 mil-p-160-160">
            <p className="mil-stylized mil-m2 mil-mb60 mil-up-removed">
              {texts?.blogPage?.subscribe?.p1}
            </p>
            <h2 className="mil-display3 mil-rubber mil-mb60 mil-up-removed">
              {texts?.blogPage?.subscribe?.h2?.heading1}{" "}
              <span className="mil-a2">
                {texts?.blogPage?.subscribe?.h2?.span}
              </span>{" "}
              <br />
              {texts?.blogPage?.subscribe?.h2?.heading2}
            </h2>
            <form className="mil-subscribe-form mil-up-removed mil-c-gone">
              <input type="text" placeholder={texts?.blogPage?.subscribe?.form?.placeholders?.email} />
              <button type="submit">
                <i className="fal fa-arrow-right"></i>
              </button>
            </form>
          </div>
          <div className="mil-image-box">
            <div className="mil-image-frame">
              <img
                src="img/home-4/2.jpg"
                alt="img"
                className="mil-scale-img"
                data-value-1="1.20"
                data-value-2="1"
              />
              <div className="mil-overlay"></div>
            </div>
          </div>
        </div>
        <div className="row mil-aic mil-jcb mil-no-g">
          <div className="col-lg-6">
            <div
              className="mil-button-pad mil-a1 mil-jst"
              style={{ display: "block" }}
            ></div>
          </div>
          <div className="col-lg-6 mil-992-gone">
            <div className="mil-text-pad">
              <p className="mil-text-sm mil-up-removed">
                {texts?.blogPage?.subscribe?.p2?.para1} <br />
                <Link
                  href="contact-stl.html"
                  className="mil-text-link mil-a2 mil-c-gone"
                >
                  {texts?.blogPage?.subscribe?.p2?.para2}
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
