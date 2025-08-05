import Image from "next/image";
import Link from "next/link";

const NextProject = ({
  portfolioTitle,
  portfolioImage,
  portfolioSlug,
}: {
  portfolioTitle: string;
  portfolioImage: string;
  portfolioSlug: string;
}) => {
  return (
    <div className="overflow-hidden">
      <div className="mil-half-container mil-stl">
        <div className="mil-text-box mil-g-m4 mil-p-160-160 ps-5">
          <p className="mil-stylized mil-a1 mil-mb60">next project</p>
          <h2 className="mil-display3 mil-mb60 mil-m1">{portfolioTitle}</h2>
          <p className="mil-text-md mil-deco-text mil-shortened mil-mb60">
            Pariatur omnis labore sit, facilis tempora repudiandae earum
          </p>
          <div>
            <Link
              href={`/portfolio/${portfolioSlug}`}
              className="mil-btn mil-btn-border mil-m1 mil-c-gone"
            >
              View porject
            </Link>
          </div>
        </div>
        <div className="mil-image-box">
          <div className="mil-image-frame">
            <Image
              fill
              priority
              src={portfolioImage}
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

export default NextProject;
