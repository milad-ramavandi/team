import Link from "next/link";

const Partners = () => {
  return (
    <div className="mil-p-160-130">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <Link
              href="#home"
              className="mil-partner mil-invert mil-mb30"
              // target="_blank"
              data-no-swup
            >
              <img src="/img/brands/1.png" alt="partner logo" />
            </Link>
          </div>
          <div className="col-6 col-md-3">
            <Link
              href="#home"
              className="mil-partner mil-invert mil-mb30"
              // target="_blank"
              data-no-swup
            >
              <img src="/img/brands/2.png" alt="partner logo" />
            </Link>
          </div>
          <div className="col-6 col-md-3">
            <Link
              href="#home"
              className="mil-partner mil-invert mil-mb30"
              // target="_blank"
              data-no-swup
            >
              <img src="/img/brands/3.png" alt="partner logo" />
            </Link>
          </div>
          <div className="col-6 col-md-3">
            <Link
              href="#home"
              className="mil-partner mil-invert mil-mb30"
              // target="_blank"
              data-no-swup
            >
              <img src="/img/brands/4.png" alt="partner logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
