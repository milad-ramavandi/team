import Image from "next/image";

const Details = ({ portfolioImage }: { portfolioImage: string }) => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row mil-jcb mil-aic">
            <div className="col-lg-12 mil-mb160">
              <div className="mil-project-img mil-land">
                <Image
                  fill
                  priority
                  src={portfolioImage}
                  alt="project"
                  className="mil-scale-img"
                  data-value-1="1.15"
                  data-value-2="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-p-0-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 mil-mb60">
                  <h6 className="mil-head4 mil-mb30">Client</h6>
                  <p className="mil-text-md mb-0">Envato Market</p>
                  <p className="mil-text-md mb-0">
                    <a
                      href="#."
                      className="mil-text-link mil-a2"
                      data-no-swup=""
                    >
                      Visit website
                    </a>
                  </p>
                </div>
                <div className="col-lg-4 mil-mb60">
                  <h6 className="mil-head4 mil-mb30">Date</h6>
                  <p className="mil-text-md mb-0">From April 2024</p>
                  <p className="mil-text-md mb-0">To January 2025</p>
                </div>
                <div className="col-lg-4 mil-mb60">
                  <h6 className="mil-head4 mil-mb30">Executors</h6>
                  <p className="mil-text-md mb-0">Emma Miller</p>
                  <p className="mil-text-md mb-0">Paul Trueman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-p-0-130">
        <div className="container">
          <div className="row mil-jcb">
            <div className="col-lg-12">
              <h2 className="mil-head2 mil-mb60">
                <span className="mil-a2">About</span> project
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="mil-text-md mil-mb30">
                Ducimus, expedita magnam assumenda in alias modi, ipsam. Dolor
                maxime iusto, labore dicta obcaecati, vero recusandae deleniti
                inventore commodi ex! Temporibus fuga quisquam deserunt nobis
                cum minima ipsa voluptatibus quasi aspernatur accusantium et
                saepe porro rem dolorem ad neque eaque vel, perspiciatis
                doloribus earum. Pariatur omnis labore sit, facilis tempora
                repudiandae earum illo ducimus ullam quaerat, repellendus!
                Voluptatum dolor, sint fugiat a!
              </p>
              <p className="mil-text-md mil-mb30">
                Pariatur omnis labore sit, facilis tempora repudiandae earum
                illo ducimus ullam quaerat, repellendus! Voluptatum dolor, sint
                fugiat a!
              </p>
            </div>
            <div className="col-lg-5">
              <p className="mil-text-md mil-mb30">
                Temporibus fuga quisquam deserunt nobis cum minima ipsa
                voluptatibus quasi aspernatur accusantium et saepe porro rem
                dolorem ad neque eaque vel, perspiciatis doloribus earum.
                Pariatur omnis labore sit, facilis tempora repudiandae earum
                illo ducimus ullam quaerat, repellendus! Voluptatum dolor, sint
                fugiat a!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
