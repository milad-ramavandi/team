import Image from "next/image";
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
              <Image width={179} height={181} priority src="/img/brands/1.png" alt="partner logo" />
            </Link>
          </div>
          <div className="col-6 col-md-3">
            <Link
              href="#home"
              className="mil-partner mil-invert mil-mb30"
              // target="_blank"
              data-no-swup
            >
              <Image width={167} height={180} priority src="/img/brands/2.png" alt="partner logo" />
            </Link>
          </div>
          <div className="col-6 col-md-3">
            <Link
              href="#home"
              className="mil-partner mil-invert mil-mb30"
              // target="_blank"
              data-no-swup
            >
              <Image width={220} height={181} priority src="/img/brands/3.png" alt="partner logo" />
            </Link>
          </div>
          <div className="col-6 col-md-3">
            <Link
              href="#home"
              className="mil-partner mil-invert mil-mb30"
              // target="_blank"
              data-no-swup
            >
              <Image width={132} height={168} priority src="/img/brands/4.png" alt="partner logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
