import { IBlogCard } from "../../../../types/blog";
import BlogCard from "../blog-card";
import Slider from "../slider";

const popularBlogsPromise = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/blog?category_id=5&paged=1`
  );
  return res.json();
};

const mainBlogsPromise = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/blog?category_id=2&paged=1`
  );
  return res.json();
};

const SiderAndSlider = async () => {
  
const [popularBlogsData, mainBlogsData] = await Promise.all([
  popularBlogsPromise(),
  mainBlogsPromise(),
]);

  return (
    <div className="d-flex flex-column-reverse align-items-center px-2 sider-and-slider">
      <div className="d-flex flex-column flex-sm-row align-items-center blogs-card">
        {popularBlogsData?.posts?.slice(0, 2)?.map((item: IBlogCard) => {
          return (
            <div key={item?.id} className="w-100">
              <BlogCard blog={item} />
            </div>
          );
        })}
      </div>
      <div className="d-flex flex-column justify-content-start align-items-center mx-auto main-slider">
        <Slider slides={mainBlogsData?.posts} />
      </div>
    </div>
  );
};

export default SiderAndSlider;
