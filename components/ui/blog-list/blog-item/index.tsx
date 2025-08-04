import Image from "next/image";
import { IBlog } from "../../../../types/blog";

const BlogItem = ({ imageUrl, title }: IBlog) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="mil-team-card mil-stl mil-mb30 mil-768-mb-15">
        <div className="mil-hover-frame">
          <Image
            fill
            priority
            src={imageUrl}
            alt="team member"
            // className="mil-scale-img"
            data-value-1="1.20"
            data-value-2="1"
          />
        </div>
        <div className="mil-hover-overlay">
          <div className="mil-descr">
            <p className="mil-para-blog mil-a1">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
