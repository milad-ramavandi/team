import Image from "next/image";
import { IBlogCard } from "../../../../../../types/blog";
import Link from "next/link";
const SliderCard = ({imageUrl, title, slug, onClick}:IBlogCard) => {
  return (
    <Link href={`/blog/${slug}`} className="mil-blog-card-sm mil-c-gone" onClick={onClick}>
      <div className="mil-cover">
        <div className="mil-hover-frame">
          <Image fill src={imageUrl} alt="cover" />
        </div>
      </div>
      <div className="mil-text-frame">
        <h4 className="mil-head6 mil-max-1row-text slider-text">
          {title}
        </h4>
      </div>
    </Link>
  );
};

export default SliderCard;
