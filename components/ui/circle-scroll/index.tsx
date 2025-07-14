import Link from "next/link";

const CircleScroll = ({ Goto, className, classNameArrow }: { Goto: string, className?:string, classNameArrow?:string }) => {
  return (
    <div className={`mil-circle-text-frame ${className}`}>
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
                We are what we think - We are what we think -{" "}
              </textPath>
            </text>
          </g>
        </svg>
        <span className={`mil-arrow ${classNameArrow}`}>
          <i className="fal fa-arrow-down"></i>
        </span>
      </Link>
    </div>
  );
};

export default CircleScroll;
