import Link from "next/link";
import BlogCard from "../blog-card";
import { tagsList } from "../../../../data/blog/tags";
import TagIcon from "../tag";
import DateFormatRelative from "../../../../utils/date-format-relative";
import { IBlogsListResponse, ICategory } from "../../../../types/blog";
import CategoriesList from "../categories-list";
import BlogShare from "../blog-share";


const BlogItemContent = ({
  date,
  htmlContent,
  title,
  categoriesList,
  tags,
  popularBlogs,
}: {
  date: string;
  htmlContent: string;
  title: string;
  categoriesList: ICategory[];
  tags: number[];
  popularBlogs: IBlogsListResponse;
}) => {
  return (
    <>
      <div className="container min-vh-100 py-4 position-relative blog-content-container mil-mt180">
        <div className="row g-4">
          {/* Sidebar */}
          <div className="col-12 order-2 col-xl-3 order-xl-1">
            <div className="d-flex align-items-center gap-2 mb-3">
              <hr style={{ width: "1rem", borderTop: "1px solid #7c3980" }} />
              <p className="mb-0 text-white">Popular</p>
              <hr className="flex-grow-1 border-white opacity-25" />
            </div>

            <div className="mb-4">
              <BlogCard blog={popularBlogs?.posts?.[0]} />
            </div>

            <CategoriesList categoriesList={categoriesList} />

            <div className="d-flex align-items-center gap-2 my-4">
              <hr style={{ width: "1rem", borderTop: "1px solid #7c3980" }} />
              <p className="mb-0 text-white">Popular</p>
              <hr className="flex-grow-1 border-white opacity-25" />
            </div>

            <div className="d-flex flex-column gap-3">
              {popularBlogs?.posts?.slice(1)?.map((item) => (
                <BlogCard blog={item} key={item?.id} />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 order-1 col-xl-9 order-xl-2">
            <div className="rounded p-4 backdrop-none mb-4 main-content">
              <div className="d-flex flex-column">
                <span className="text-white-50 small">{DateFormatRelative(date)}</span>
                <h1 className="fs-4 fw-bold mt-3 text-white">{title}</h1>
                <article
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </div>
            </div>

            <div className="rounded main-content p-4 backdrop-none d-flex flex-column flex-lg-row justify-content-between align-items-start gap-4 mb-4">
              <div className="d-flex flex-wrap align-items-center gap-3">
                <div className="d-flex align-items-center gap-2">
                  <TagIcon />
                  <span style={{color:'white'}}>Tags:</span>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {tags?.map((tag) => {
                    const mainTag = tagsList?.find((item) => item?.id === tag.toString());
                    return (
                      <Link
                        key={mainTag?.id}
                        href={`/blog?tag_id=${mainTag?.id}#tab_search_bar`}
                        className="text-white text-nowrap"
                        style={{
                          fontSize:"16px"
                        }}
                      >
                        {mainTag?.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <BlogShare />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItemContent;
