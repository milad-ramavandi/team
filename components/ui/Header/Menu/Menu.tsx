import Link from "next/link";
import MenuSlider from "./MenuSlider";
export default function Menu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`mil-menu-frame mil-menu-frame-2 ${open && "mil-active"}`}
    >
      <div className="mil-menu-window">
        <div className="container">
          <div className="row mil-no-g">
            <div className="col-lg-6">
              <div className="mil-left-side">
                <div className="mil-menu-part mil-inner-scroll" id="swupMenu">
                  <ul className="mil-main-menu mil-c-gone">
                    <li className="mil-has-children">
                      <Link href="#.">Template style</Link>
                      <ul>
                        <li>
                          <Link href="home-1.html" target="_blank" data-no-swup>
                            Friendly
                          </Link>
                        </li>
                        <li className="mil-current">
                          <Link href="home-4.html" target="_blank" data-no-swup>
                            Stylish
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mil-has-children">
                      <Link href="#.">Home type</Link>
                      <ul>
                        <li>
                          <Link href="home-4.html">Corporate</Link>
                        </li>
                        <li className="mil-current">
                          <Link href="home-5.html">Agency</Link>
                        </li>
                        <li>
                          <Link href="home-6.html">Personal</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mil-has-children">
                      <Link href="#.">Portfolio</Link>
                      <ul>
                        <li>
                          <Link href="portfolio-1-stl.html">Grid type 1</Link>
                        </li>
                        <li>
                          <Link href="portfolio-2-stl.html">Grid type 2</Link>
                        </li>
                        <li>
                          <Link href="portfolio-3-stl.html">Grid type 3</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mil-has-children">
                      <Link href="#.">Pages</Link>
                      <ul>
                        <li>
                          <Link href="team-stl.html">Team</Link>
                        </li>
                        <li>
                          <Link href="contact-stl.html">Contact</Link>
                        </li>
                        <li>
                          <Link href="services-stl.html">Services</Link>
                        </li>
                        <li>
                          <Link href="service-stl.html">Service single</Link>
                        </li>
                        <li>
                          <Link href="blog-stl.html">Blog</Link>
                        </li>
                        <li>
                          <Link href="publication-stl.html">Publication</Link>
                        </li>
                        <li>
                          <Link href="404-stl.html">404</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="mil-bottom-part">
                  <p className="mil-text-sm">©2024. All rights reserved.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-right-side">
                <div className="mil-links-part">
                  <ul className="mil-links">
                    <li>
                      <Link href="#.">Privacy policy</Link>
                    </li>
                    <li>
                      <Link href="#.">Therms and conditions</Link>
                    </li>
                    <li>
                      <Link href="#.">Site map</Link>
                    </li>
                    <li>
                      <Link href="#.">Careers</Link>
                    </li>
                  </ul>
                </div>
                <div className="mil-blog-part">
                  <div className="mil-blog-section">
                    <div className="mil-jcb mil-aic">
                      <h4 className="mil-head4 mil-mb30 slider-text">
                        Latest from blog
                      </h4>
                      <div className="mil-sb-nav mil-mb30">
                        <div className="mil-slider-btn mil-sb-prev mil-c-gone">
                          <i className="fal fa-arrow-left"></i>
                        </div>
                        <div className="mil-slider-btn mil-sb-next mil-c-gone">
                          <i className="fal fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <MenuSlider />
                  </div>
                  <div className="mil-menu-social">
                    <ul className="mil-social mil-c-gone">
                      <li>
                        <Link href="#." target="_blank" data-no-swup>
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#." target="_blank" data-no-swup>
                          <i className="fab fa-behance"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#." target="_blank" data-no-swup>
                          <i className="fab fa-dribbble"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#." target="_blank" data-no-swup>
                          <i className="fab fa-pinterest-p"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#." target="_blank" data-no-swup>
                          <i className="fab fa-github"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
