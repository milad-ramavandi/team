const AboutUs = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row mil-jcb mil-aic">
          <div className="col-lg-5 mil-mb130">
            <p className="mil-stylized mil-m2 mil-mb60">About us</p>
            <h2 className="mil-head1 mil-mb60">
              Discover <br />
              Our <span className="mil-a1">agency</span>
            </h2>
            <p className="mil-text-md mil-mb30">
              We specialize in crafting unique brands, captivating advertising
              campaigns, and effective digital strategies. Our team of talented
              designers, copywriters, and marketers works with passion and
              dedication to make your business stand out. We take the time to
              understand your vision and tailor our approach to ensure your
              message resonates with your target audience.
            </p>
            <p className="mil-text-md mil-mb60">
              Our goal is to help you build an emotional connection with your
              audience using cutting-edge tools and approaches.
            </p>
            <div className="mil-team-quote">
              <div className="mil-portrait">
                <img src="img/team/ceo.jpg" alt="SEO portrait" />
              </div>
              <p className="mil-text-md mil-m1">
                <span className="mil-bold">Passionately Creating</span> Design
                Wonders: <br />
                <span className="mil-bold">Unleashing</span> Boundless
                Creativity
              </p>
            </div>
          </div>
          <div className="col-lg-6 mil-mb160">
            <div className="mil-about-img-frame">
              <div className="mil-about-img">
                <img
                  src="img/home-5/2.jpg"
                  alt="About"
                  // className="mil-scale-img"
                  data-value-1="1.25"
                  data-value-2="1"
                />
              </div>
              <div className="mil-button-box">
                <div>
                  <a
                    // href="services-stl.html"
                    href="#home"
                    className="mil-btn mil-btn-border mil-c-gone"
                  >
                    Read more about us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
