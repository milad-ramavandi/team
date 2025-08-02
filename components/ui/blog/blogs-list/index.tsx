import { IBlogCard, IBlogsListResponse } from "../../../../types/blog";
import BlogCard from "../blog-card";
import EmptyBox from "../empty-box";
import Pagination from "../pagination";

const BlogsList = ({ blogsList }: { blogsList: IBlogsListResponse }) => {
  if (!blogsList?.posts?.length) return <EmptyBox />;
  return (
    <>
      <div className="blogs-list post-item">
        {blogsList?.posts?.map((blog: IBlogCard) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
      {blogsList?.pagination?.total_pages > 1 && (
        <Pagination totalPages={blogsList?.pagination?.total_pages} currentPage={blogsList?.pagination?.current_page} />
      )}
    </>
  );
};

export default BlogsList;
