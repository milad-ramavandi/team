import Image from "next/image";
import { IReviewBlog } from "../../../types/reviews-blog";

interface IReviewBlogProps extends IReviewBlog {
  isTitle?: boolean;
}

const ReviewBlog = ({
  imageUrl,
  author,
  title,
  description,
  isTitle,
}: IReviewBlogProps) => {
  return (
    <div className="swiper-slide">
      <div className="mil-review" data-swiper-parallax-scale="0.8">
        <div className="mil-portrait mil-mb30">
          <Image fill priority src={imageUrl} alt="Client" />
        </div>
        <h4 className="mil-head4 mil-max-1row-text mil-mb15 mil-c-gone">
          {author}
        </h4>
        {isTitle && <p className="mil-stylized mil-m2 mil-mb30">{title}</p>}
        <p className="mil-text-lg mil-m1">{description}</p>
      </div>
    </div>
  );
};

export default ReviewBlog;
