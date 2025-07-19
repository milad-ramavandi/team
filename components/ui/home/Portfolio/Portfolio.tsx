import Link from "next/link";
import { texts } from "../../../../lib/texts";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="row mil-aie mil-mb30">
          <div className="col-md-7">
            <h2 className="mil-head1 mil-mb60">
              {texts.homePage.portfolio.h2.span1}<span className="mil-a2">{texts.homePage.portfolio.h2.span2}</span>{texts.homePage.portfolio.h2.span3}
            </h2>
          </div>
          <div className="col-md-5">
            <p className="mil-stylized mil-m1 mil-tar mil-768-tal mil-mb60">
              <Link
                href="portfolio-1-stl.html"
                className="mil-arrow-link mil-c-gone"
              >
                View all
              </Link>
            </p>
          </div>
        </div>
        <div className="row mil-mb60">
          <div className="col-md-6">
            <div className="mil-work-card mil-stl mil-mb30">
              <div className="mil-cover mil-port">
                <div className="mil-hover-frame">
                  <img
                    src="img/works/1/1-s 2.jpg"
                    alt="cover"
                    // className="mil-scale-img"
                    data-value-1="1.15"
                    data-value-2="1"
                  />
                </div>
              </div>
              <div className="mil-hover-overlay">
                <Link href="project-1-stl.html" className="mil-descr">
                  <div className="mil-text-frame">
                    <h4 className="mil-head4 mil-max-1row-text mil-m1 mil-c-gone">
                      {texts.homePage.portfolio.item1}
                    </h4>
                  </div>
                  <div className="mil-768-gone mil-c-gone">
                    <div className="mil-stylized-btn mil-a1">
                      <i className="fal fa-arrow-up"></i>
                      <span>{texts.homePage.portfolio.button2}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mil-work-card mil-stl mil-mb30">
              <div className="mil-cover mil-square">
                <div className="mil-hover-frame">
                  <img
                    src="img/works/2/1-s (4).jpg"
                    alt="cover"
                    // className="mil-scale-img"
                    data-value-1="1.15"
                    data-value-2="1"
                  />
                </div>
              </div>
              <div className="mil-hover-overlay">
                <Link href="project-2-stl.html" className="mil-descr">
                  <div className="mil-text-frame">
                    <h4 className="mil-head4 mil-max-1row-text mil-m1 mil-c-gone">
                      {texts.homePage.portfolio.item2}
                    </h4>
                  </div>
                  <div className="mil-768-gone mil-c-gone">
                    <div className="mil-stylized-btn mil-a1">
                      <i className="fal fa-arrow-up"></i>
                      <span>{texts.homePage.portfolio.button2}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mil-work-card mil-stl mil-mb30">
              <div className="mil-cover mil-land">
                <div className="mil-hover-frame">
                  <img
                    src="img/works/3/1-s (5).jpg"
                    alt="cover"
                    // className="mil-scale-img"
                    data-value-1="1.15"
                    data-value-2="1"
                  />
                </div>
              </div>
              <div className="mil-hover-overlay">
                <Link href="#home" className="mil-descr">
                  <div className="mil-text-frame">
                    <h4 className="mil-head4 mil-max-1row-text mil-m1 mil-c-gone">
                      {texts.homePage.portfolio.item3}
                    </h4>
                  </div>
                  <div className="mil-768-gone mil-c-gone">
                    <div className="mil-stylized-btn mil-a1">
                      <i className="fal fa-arrow-up"></i>
                      <span>{texts.homePage.portfolio.button2}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mil-work-card mil-stl mil-mb30">
              <div className="mil-cover mil-land">
                <div className="mil-hover-frame">
                  <img
                    src="img/works/4/1-s (1).jpg"
                    alt="cover"
                    // className="mil-scale-img"
                    data-value-1="1.15"
                    data-value-2="1"
                  />
                </div>
              </div>
              <div className="mil-hover-overlay">
                <Link href="#home" className="mil-descr">
                  <div className="mil-text-frame">
                    <h4 className="mil-head4 mil-max-1row-text mil-m1 mil-c-gone">
                      {texts.homePage.portfolio.item4}
                    </h4>
                  </div>
                  <div className="mil-768-gone mil-c-gone">
                    <div className="mil-stylized-btn mil-a1">
                      <i className="fal fa-arrow-up"></i>
                      <span>{texts.homePage.portfolio.button2}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mil-work-card mil-stl mil-mb30">
              <div className="mil-cover mil-port">
                <div className="mil-hover-frame">
                  <img
                    src="img/works/5/1-s (2).jpg"
                    alt="cover"
                    // className="mil-scale-img"
                    data-value-1="1.15"
                    data-value-2="1"
                  />
                </div>
              </div>
              <div className="mil-hover-overlay">
                <Link href="#home" className="mil-descr">
                  <div className="mil-text-frame">
                    <h4 className="mil-head4 mil-max-1row-text mil-m1 mil-c-gone">
                      {texts.homePage.portfolio.item5}
                    </h4>
                  </div>
                  <div className="mil-768-gone mil-c-gone">
                    <div className="mil-stylized-btn mil-a1">
                      <i className="fal fa-arrow-up"></i>
                      <span>{texts.homePage.portfolio.button2}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mil-work-card mil-stl mil-mb30">
              <div className="mil-cover mil-square">
                <div className="mil-hover-frame">
                  <img
                    src="img/works/6/1-s (3).jpg"
                    alt="cover"
                    // className="mil-scale-img"
                    data-value-1="1.15"
                    data-value-2="1"
                  />
                </div>
              </div>
              <div className="mil-hover-overlay">
                <Link href="#home" className="mil-descr">
                  <div className="mil-text-frame">
                    <h4 className="mil-head4 mil-max-1row-text mil-m1 mil-c-gone">
                      {texts.homePage.portfolio.item6}
                    </h4>
                  </div>
                  <div className="mil-768-gone mil-c-gone">
                    <div className="mil-stylized-btn mil-a1">
                      <i className="fal fa-arrow-up"></i>
                      <span>{texts.homePage.portfolio.button2}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mil-aic mil-p-0-130">
          <div className="col-md-6 mil-mb30">
            <p className="mil-text-md mil-deco-text">
              {texts.homePage.portfolio.p1}<br />
              {texts.homePage.portfolio.p2}
            </p>
          </div>
          <div className="col-md-6 mil-jce mil-768-jcs mil-mb30">
            <span>
              <Link
                // href="portfolio-1-stl.html"
                href="#home"
                className="mil-btn mil-a2 mil-c-gone"
              >
                {texts.homePage.portfolio.button3}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
