import Link from "next/link";
import { IService } from "../../../../types/about";

const Service = ({ title, slug, description }: IService) => {
  return (
    <li className="mil-service-item mil-768-mb60">
      <div className="mil-item-text mil-mb30">
        <h3 className="mil-head3 mil-mb30">{title}</h3>
        <p className="mil-text-md mil-deco-text mil-max-3row-text">
          {description}
        </p>
      </div>
      <div className="mil-mb30">
        <Link href={`services/${slug}`} className="mil-stylized-btn mil-c-gone">
          <i className="fal fa-arrow-up"></i>
          <span>Read more</span>
        </Link>
      </div>
    </li>
  );
};

export default Service;
