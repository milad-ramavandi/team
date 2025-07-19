import Link from "next/link";
import { latestPulications } from "../../data/blog/latest";
import BlogCard from "./BlogCard";
export default function LatestPublications() {
  const blogsData = latestPulications;

  return (
    <>
      <div className="mil-p-0-100">
        <div className="container">
          <div className="row mil-aie mil-mb30">
            <div className="col-md-6">
              <h2 className="mil-head1 mil-mb60 mil-up-removed">
                Latest <span className="mil-a2">Publications</span>
              </h2>
            </div>
          </div>
          <div className="row">
            {blogsData.map((blog, index) => (
              <div key={index} className="col-lg-12">
                <BlogCard
                  imageSrc={blog.imageSrc}
                  category={blog.category}
                  date={blog.date}
                  title={blog.title}
                  description={blog.description}
                  link={blog.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mil-p-0-160">
        <div className="container">
          <div className="mil-blog-pagination">
            <ul>
              <li>
                <Link href="#.">
                  <i className="far fa-arrow-left"></i>
                </Link>
              </li>
              <li className="mil-active">
                <Link href="#.">1</Link>
              </li>
              <li>
                <Link href="#.">2</Link>
              </li>
              <li>
                <Link href="#.">...</Link>
              </li>
              <li>
                <Link href="#.">
                  <i className="far fa-arrow-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
