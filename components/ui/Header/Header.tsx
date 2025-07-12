import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="mil-fixed">
        <div className="mil-top-panel-2">
          <div className="container">
            <div className="mil-left-side mil-tp-transition" id="swupTpLeft">
              <Link href="#top" className="mil-logo mil-scroll-to" data-no-swup>
                <i className="far fa-cube"></i>
                <span>Pixy</span>
              </Link>
            </div>

            <div className="mil-onepage-nav" id="swup-opm">
              <ul>
                <li>
                  <Link
                    href="/about"
                    data-no-swup
                    // style={{ color: `${pathname === "/about" && "#cd512f"}` }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="mil-scroll-to"
                    data-no-swup
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#reviews" className="mil-scroll-to" data-no-swup>
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="mil-scroll-to" data-no-swup>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mil-buttons-tp-frame mil-c-gone">
              <div className="mil-buttons">
                <Link href="contact-stl.html" className="mil-tp-btn">
                  <i className="fal fa-envelope"></i>
                </Link>
                <div className="mil-tp-btn">
                  <div className="mil-menu-btn">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
