import Link from "next/link";
import { texts } from "../../../lib/texts";

const CircleScroll = ({
  Goto,
  isRight,
}: {
  Goto: string;
  isRight?: boolean;
}) => {
  return (
    <div
      className={`d-flex ${
        isRight ? "justify-content-end" : "justify-content-center"
      }`}
    >
      <div className={`${isRight ? "mil-circle-text-frame-bg-transparent" : "mil-circle-text-frame"}`}>
        <Link
          href={`${Goto}`}
          className="mil-circle-text mil-scroll-to mil-c-gone"
          data-no-swup
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
            data-value="360"
            className="mil-rotate"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <circle cx="150" cy="100" r="75" fill="none" />
            <g>
              <use xlinkHref="#circlePath" fill="none" />
              <text letterSpacing={2}>
                {/* <!-- circle text --> */}
                <textPath xlinkHref="#circlePath">
                  {texts.homePage.hero.circlescroll}
                </textPath>
              </text>
            </g>
          </svg>
          <span className={`mil-arrow`}>
            <i className={`fal fa-arrow-down`}></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CircleScroll;
