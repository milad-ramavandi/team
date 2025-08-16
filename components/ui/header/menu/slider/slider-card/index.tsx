import Image from "next/image";
import { IBlogCard } from "../../../../../../types/blog";
const SliderCard = ({imageUrl, title}:IBlogCard) => {
  return (
    <a className="mil-blog-card-sm mil-c-gone">
      <div className="mil-cover">
        <div className="mil-hover-frame">
          <Image fill priority src={imageUrl} alt="cover" />
        </div>
      </div>
      <div className="mil-text-frame">
        <h4 className="mil-head6 mil-max-1row-text slider-text">
          {title}
        </h4>
      </div>
    </a>
  );
};

export default SliderCard;
