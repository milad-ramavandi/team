import Link from "next/link";
import { Slide } from "../../types/blog/blogPageSlideCard";

export default function SliderCard({
  imageSrc,
  category,
  date,
  title,
  description,
  link,
}: Slide) {
  return (
    <div className="mil-blog-card">
      <div className="mil-cover mil-up-removed">
        <div className="mil-hover-frame">
          <img
            src={imageSrc}
            alt="cover"
            className="mil-scale-img"
            data-value-1="1.15"
            data-value-2="1"
          />
        </div>
        <div className="mil-badges">
          <div className="mil-category">{category}</div>
          <div className="mil-date">{date}</div>
        </div>
      </div>
      <Link href={link} className="mil-descr mil-c-gone">
        <div className="mil-text-frame">
          <h4 className="mil-head4 mil-max-2row-text mil-mb20 mil-up-removed">
            {title}
          </h4>
          <p className="mil-text-md mil-max-2row-text mil-up-removed">
            {description}
          </p>
        </div>
        <div className="mil-up-removed mil-768-gone">
          <div className="mil-stylized-btn">
            <i className="fal fa-arrow-up"></i>
            <span>Read more</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
