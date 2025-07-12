const Footer = () => {
  return (
    <footer className="mil-footer mil-p-160-160">
      <div className="container">
        <div className="row mil-no-g">
          <div className="col-lg-6 mil-up">
            <a href="#home" className="mil-footer-contact">
              <h6 className="mil-footer-link mil-rubber mil-m1">Let’s TALK</h6>
              <span className="mil-stylized-btn mil-c-gone">
                <i className="fal fa-arrow-up"></i>
                <span>Read more</span>
              </span>
            </a>
          </div>
          <div className="col-lg-12">
            <div className="mil-footer-menu-frame mil-up mil-mb15">
              <ul className="mil-footer-menu">
                <li>
                  <a href="#home" className="mil-c-gone">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="mil-c-gone">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="mil-c-gone">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="mil-c-gone">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="mil-c-gone">
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="mil-social mil-c-gone">
                <li>
                  <a href="#home" data-no-swup>
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#home" data-no-swup>
                    <i className="fab fa-behance"></i>
                  </a>
                </li>
                <li>
                  <a href="#home" data-no-swup>
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#home" data-no-swup>
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
            <div className="mil-footer-bottom mil-up">
              <p className="mil-text-sm">©2024. All rights reserved.</p>
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
