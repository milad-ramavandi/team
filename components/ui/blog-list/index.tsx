import Link from "next/link";
import BlogItem from "./blog-item";
import { texts } from "../../../lib/texts";
import { IBlogCard } from "../../../types/blog";

const blogs: IBlogCard[] = texts?.blogs.slice(0, 4);

const BlogList = () => {
  return (
    <div className="container mil-p-0-130 mil-768-p-160-145">
      <div className="row mil-aie mil-mb30">
        <div className="col-lg-6">
          <h2 className="mil-head1 mil-mb60">
            {texts?.homePage?.blog?.h2?.span1}
          </h2>
        </div>
        <div className="col-lg-6">
          <p className="mil-stylized mil-m1 mil-tar mil-768-tal mil-mb60">
            <Link href="/blog" className="mil-arrow-link mil-c-gone">
              {texts?.homePage?.blog?.button}
            </Link>
          </p>
        </div>
      </div>

      <div className="row">
        {blogs.map((item, index) => {
          return <BlogItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default BlogList;
