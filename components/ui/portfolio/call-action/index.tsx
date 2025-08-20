import Link from "next/link";
import { texts } from "../../../../lib/texts";

const CallAction = () => {
  return (
    <div className="mil-p-0-130 overflow-hidden">
      <div className="container mil-relative">
        <div className="mil-objects">
          <div className="mil-obj-1"></div>
          <div className="mil-obj-2"></div>
        </div>
        <p className="mil-stylized mil-m2 mil-mb60 mil-tac">
          {texts?.portfolioPage?.call_action?.p1}
        </p>
        <h2 className="mil-head1 mil-tac mil-mb60">
          {texts?.portfolioPage?.call_action?.h2?.heading1}{" "}
          <span className="mil-a1">
            {texts?.portfolioPage?.call_action?.h2?.span1}
          </span>{" "}
          {texts?.portfolioPage?.call_action?.h2?.heading2}{" "}
          <span className="mil-a1">
            {texts?.portfolioPage?.call_action?.h2?.span2}
          </span>{" "}
          {texts?.portfolioPage?.call_action?.h2?.heading3}{" "}
          <span className="mil-a1">
            {texts?.portfolioPage?.call_action?.h2?.span3}
          </span>{" "}
        </h2>
        <div className="mil-text-with-button mil-mb60">
          <p className="mil-text-sm mil-tar mil-768-tac">
            {texts?.portfolioPage?.call_action?.p2?.span1} <br />
            {texts?.portfolioPage?.call_action?.p2?.span2}
          </p>
          <span>
            <Link href="/contact-us" className="mil-btn mil-a2 mil-c-gone">
              {texts?.portfolioPage?.call_action?.button}
            </Link>
          </span>
        </div>
      </div>
      <div className="mil-tapes-frame overflow-hidden">
        <div
          className="mil-tape-1 mil-parallax-x-img"
          data-value-1="0"
          data-value-2="20%"
        >
          <div className="mil-btn mil-btn-border">
            {texts?.portfolioPage?.call_action?.tape1?.span1}
          </div>
          <div className="mil-btn mil-btn-border">
            {texts?.portfolioPage?.call_action?.tape1?.span2}
          </div>
          <div className="mil-btn mil-btn-border">
            {texts?.portfolioPage?.call_action?.tape1?.span3}
          </div>
          <div className="mil-btn mil-btn-border">
            {texts?.portfolioPage?.call_action?.tape1?.span4}
          </div>
          <div className="mil-btn mil-btn-border">
            {texts?.portfolioPage?.call_action?.tape1?.span5}
          </div>
          <div className="mil-btn mil-btn-border">
            {texts?.portfolioPage?.call_action?.tape1?.span6}
          </div>
          <div className="mil-btn mil-btn-border">
            {texts?.portfolioPage?.call_action?.tape1?.span7}
          </div>
          <div className="mil-btn mil-btn-border">
            {texts?.portfolioPage?.call_action?.tape1?.span8}
          </div>
        </div>
        <div
          className="mil-tape-2 mil-parallax-x-img"
          data-value-1="0"
          data-value-2="-20%"
        >
          <h4 className="mil-head4">
            {texts?.portfolioPage?.call_action?.tape2?.span1}
          </h4>
          <h4 className="mil-head4">
            {texts?.portfolioPage?.call_action?.tape2?.span2}
          </h4>
          <h4 className="mil-head4">
            {texts?.portfolioPage?.call_action?.tape2?.span3}
          </h4>
          <h4 className="mil-head4">
            {texts?.portfolioPage?.call_action?.tape2?.span4}
          </h4>
          <h4 className="mil-head4">
            {texts?.portfolioPage?.call_action?.tape2?.span5}
          </h4>
          <h4 className="mil-head4">
            {texts?.portfolioPage?.call_action?.tape2?.span6}
          </h4>
          <h4 className="mil-head4">
            {texts?.portfolioPage?.call_action?.tape2?.span7}
          </h4>
          <h4 className="mil-head4">
            {texts?.portfolioPage?.call_action?.tape2?.span8}
          </h4>
        </div>
      </div>
      <div className="mil-mt130">
        {/* <div className="container"> */}
        <div className="row mil-aic mil-jcb mil-no-g">
          <div className="col-lg-6 p-0">
            <div className="mil-button-pad mil-a1 mil-jst w-100"></div>
          </div>
          <div className="col-lg-6 mil-992-gone">
            <div className="mil-text-pad">
              <p className="mil-text-sm">
                {texts?.portfolioPage?.call_action?.p3?.span1}{" "}
                <Link
                  href="/contact-us"
                  className="mil-text-link mil-a2 mil-c-gone"
                >
                  {texts?.portfolioPage?.call_action?.p3?.button}
                </Link>{" "}
                {texts?.portfolioPage?.call_action?.p3?.span2}
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CallAction;
