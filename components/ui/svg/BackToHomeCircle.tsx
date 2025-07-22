export default function BackToHomeCircle() {
  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 300 300"
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
          <text style={{ letterSpacing: "2.2px" }}>
            <textPath xlinkHref="#circlePath">
              back to home - back to home - back to home -
            </textPath>
          </text>
        </g>
      </svg>
    </>
  );
}
