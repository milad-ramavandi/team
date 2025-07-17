"use client";
import Link from "next/link";
import MenuSlider from "./MenuSlider";
import { texts } from "../../../../lib/texts";
import { useEffect } from "react";

export default function Menu({ open }: { open: boolean }) {
  useEffect(() => {
    document.querySelectorAll(".mil-has-children > a").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();

        const parentElement = (link as HTMLElement).parentElement;
        const isActive = parentElement?.classList.contains("mil-active");

        document.querySelectorAll(".mil-has-children").forEach((el) => {
          const ul = el.querySelector("ul");
          el.classList.remove("mil-active");
          if (ul) (ul as HTMLElement).style.maxHeight = "0";
        });

        if (!isActive) {
          parentElement?.classList.add("mil-active");
          const ul = parentElement?.querySelector("ul");
          if (ul) (ul as HTMLElement).style.maxHeight = `${ul.scrollHeight}px`;
        }
      });
    });
  }, []);

  return (
    <div className={`mil-menu-frame mil-menu-frame-2 ${open && "mil-active"}`}>
      <div className="mil-menu-window">
        <div className="container">
          <div className="row mil-no-g">
            <div className="col-lg-6">
              <div className="mil-left-side">
                <div className="mil-menu-part mil-inner-scroll" id="swupMenu">
                  <ul className="mil-main-menu mil-c-gone">
                    <li className="mil-has-children">
                      <Link href="#.">{texts.menu.items[0].label}</Link>
                      <ul>
                        <li>
                          <Link href="home-1.html" target="_blank" data-no-swup>
                            {texts.menu.items[0].children[0].label}
                          </Link>
                        </li>
                        <li className="mil-current">
                          <Link href="home-4.html" target="_blank" data-no-swup>
                            {texts.menu.items[0].children[1].label}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mil-has-children">
                      <Link href="#.">{texts.menu.items[1].label}</Link>
                      <ul>
                        <li>
                          <Link href="home-4.html">
                            {texts.menu.items[1].children[0].label}
                          </Link>
                        </li>
                        <li className="mil-current">
                          <Link href="home-5.html">
                            {texts.menu.items[1].children[1].label}
                          </Link>
                        </li>
                        <li>
                          <Link href="home-6.html">
                            {texts.menu.items[1].children[2].label}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mil-has-children">
                      <Link href="#.">{texts.menu.items[2].label}</Link>
                      <ul>
                        <li>
                          <Link href="portfolio-1-stl.html">
                            {texts.menu.items[2].children[0].label}
                          </Link>
                        </li>
                        <li>
                          <Link href="portfolio-2-stl.html">
                            {texts.menu.items[2].children[1].label}
                          </Link>
                        </li>
                        <li>
                          <Link href="portfolio-3-stl.html">
                            {texts.menu.items[2].children[2].label}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mil-has-children">
                      <Link href="#.">{texts.menu.items[3].label}</Link>
                      <ul>
                        <li>
                          <Link href="team-stl.html">
                            {texts.menu.items[3].children[0].label}
                          </Link>
                        </li>
                        <li>
                          <Link href="contact-stl.html">
                            {texts.menu.items[3].children[1].label}
                          </Link>
                        </li>
                        <li>
                          <Link href="services-stl.html">
                            {texts.menu.items[3].children[2].label}
                          </Link>
                        </li>
                        <li>
                          <Link href="service-stl.html">
                            {texts.menu.items[3].children[3].label}
                          </Link>
                        </li>
                        <li>
                          <Link href="blog-stl.html">
                            {texts.menu.items[3].children[4].label}
                          </Link>
                        </li>
                        <li>
                          <Link href="publication-stl.html">
                            {texts.menu.items[3].children[5].label}
                          </Link>
                        </li>
                        <li>
                          <Link href="404-stl.html">
                            {texts.menu.items[3].children[6].label}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="mil-bottom-part">
                  <p className="mil-text-sm">{texts.menu.rights}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-right-side">
                <div className="mil-links-part">
                  <ul className="mil-links">
                    <li>
                      <Link href="#.">{texts.menu.items2[0].label}</Link>
                    </li>
                    <li>
                      <Link href="#.">{texts.menu.items2[1].label}</Link>
                    </li>
                    <li>
                      <Link href="#.">{texts.menu.items2[2].label}</Link>
                    </li>
                    <li>
                      <Link href="#.">{texts.menu.items2[3].label}</Link>
                    </li>
                  </ul>
                </div>
                <div className="mil-blog-part">
                  <div className="mil-blog-section">
                    <div className="mil-jcb mil-aic">
                      <h4 className="mil-head4 mil-mb30 slider-text">
                        {texts.menu.blog_title}
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
