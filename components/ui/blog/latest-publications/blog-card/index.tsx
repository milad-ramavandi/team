import Link from "next/link";
import { IBlogCard } from "../../../../../types/blog";
import Image from "next/image";

export default function BlogCard({
  imageUrl,
  category,
  date,
  title,
  description,
  slug
}: IBlogCard) {
  return (
    <div className="mil-blog-card mil-type-2 mil-mb60">
      <div className="mil-cover mil-up-removed">
        <div className="mil-hover-frame">
          <Image
            fill
            src={imageUrl}
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
      <Link href={`/blog/${slug}`} className="mil-descr mil-c-gone">
        <div className="mil-text-frame">
          <h4 className="mil-head3 mil-max-2row-text mil-mb30 mil-up-removed">
            {title}
          </h4>
          <p className="mil-text-md mil-max-2row-text mil-mb40 mil-up-removed">
            {description}
          </p>
          <div className="mil-up-removed">
            <div className="mil-btn mil-a2 mil-c-gone">Read more</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
