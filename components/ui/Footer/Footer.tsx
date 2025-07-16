import { texts } from "../../../lib/texts";

const Footer = () => {
  return (
    <footer className="mil-footer mil-p-160-100">
      <div className="container">
        <div className="row mil-no-g">
          <div className="col-lg-6">
            <a href="contact-stl.html" className="mil-footer-contact mil-mb90">
              <h6 className="mil-footer-link mil-m1">{texts.footer.h6}</h6>
              <span className="mil-stylized-btn mil-c-gone">
                <i className="fal fa-arrow-up"></i>
                <span>{texts.footer.button}</span>
              </span>
            </a>
          </div>
          <div className="col-lg-12">
            <div className="mil-footer-menu-frame mil-mb20">
              <ul className="mil-footer-menu">
                <li>
                  <a href="#." className="mil-c-gone">
                    {texts.footer.items[0]}
                  </a>
                </li>
                <li>
                  <a href="#." className="mil-c-gone">
                    {texts.footer.items[1]}
                  </a>
                </li>
                <li>
                  <a href="#." className="mil-c-gone">
                    {texts.footer.items[2]}
                  </a>
                </li>
                <li>
                  <a href="#." className="mil-c-gone">
                    {texts.footer.items[3]}
                  </a>
                </li>
                <li>
                  <a href="#." className="mil-c-gone">
                    {texts.footer.items[4]}
                  </a>
                </li>
              </ul>
              <ul className="mil-social mil-c-gone">
                <li>
                  <a href="#." target="_blank" data-no-swup>
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#." target="_blank" data-no-swup>
                    <i className="fab fa-behance"></i>
                  </a>
                </li>
                <li>
                  <a href="#." target="_blank" data-no-swup>
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#." target="_blank" data-no-swup>
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="#." target="_blank" data-no-swup>
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="mil-footer-bottom">
              <p className="mil-text-sm">{texts.footer.p}</p>
              {/* <p className="mil-text-sm">
                Design by:{" "}
                <a
                  href="https://themeforest.net/user/millerdigitaldesign/portfolio"
                  className="mil-text-link mil-a2 mil-c-gone"
                >
                  Nazar Miller
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
