import { getBlogsList } from "../../../../app/apis/controllers";
import { IBlogPage } from "../../../../types/blog";
import BlogCard from "../blog-card";
import Slider from "../slider";

const popularBlogsPromise = getBlogsList({
  category_id: "5",
  page: 1,
});
const mainBlogsPromise = getBlogsList({
  category_id: "2",
  page: 1,
});

const SiderAndSlider = async () => {
  const [popularBlogs, mainBlogs] = await Promise.all([
    popularBlogsPromise,
    mainBlogsPromise,
  ]);
  return (
    <div className="d-flex flex-column-reverse align-items-center px-2 sider-and-slider">
      <div className="d-flex flex-column flex-sm-row align-items-center blogs-card">
        {popularBlogs?.posts?.slice(0, 2)?.map((item: IBlogPage) => {
          return (
            <div key={item?.id} className="w-100">
              <BlogCard blog={item} />
            </div>
          );
        })}
      </div>
      <div className="d-flex flex-column justify-content-start align-items-center mx-auto main-slider">
        <Slider slides={mainBlogs?.posts} />
      </div>
    </div>
  );
};

export default SiderAndSlider;
