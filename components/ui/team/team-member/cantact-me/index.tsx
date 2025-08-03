import Link from "next/link";

const ContactMe = ({imageUrl}:{imageUrl:string}) => {
  return (
    <div className="overflow-hidden">
      <div className="mil-half-container mil-stl">
        <div className="mil-text-box mil-g-m4 mil-p-160-160 ps-5">
          <p className="mil-stylized mil-m2 mil-mb60">contact me</p>
          <h2 className="mil-display3 mil-mb60 mil-m1">
            lets <span className="mil-a1">make</span><br/> an <span className="mil-a1">impact</span><br/> together
          </h2>
          <ul className="mil-social mil-m1 mil-mb20 mil-c-gone p-0">
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
        <div className="mil-image-box">
          <div className="mil-image-frame">
            <img
              src={imageUrl}
              alt="img"
              className="mil-scale-img"
              data-value-1="1.20"
              data-value-2="1"
            />
          </div>
        </div>
      </div>
      <div className="row mil-aic mil-jcb mil-no-g">
        <div className="col-lg-6 p-0">
          <div className="mil-button-pad mil-a1 mil-jst d-block"></div>
        </div>
        <div className="col-lg-6 mil-992-gone">
          <div className="mil-text-pad">
            <p className="mil-stylized">Designing a Better World Today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
