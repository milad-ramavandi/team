import { IBlogPage } from "../../../../types/blog";
import BlogCard from "../blog-card";
import Slider from "../slider";
const popularBlogsPromise = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/blog?category_id=5&paged=1`
  );
  const data = await res.json();
  return data;
};

const mainBlogsPromise = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/blog?category_id=2&paged=1`
  );
  const data = await res.json();
  return data;
};

const SiderAndSlider = async () => {
  const [popularBlogs, mainBlogs] = await Promise.all([
    popularBlogsPromise(),
    mainBlogsPromise(),
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
