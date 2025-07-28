import BlogItemContent from "../../../components/ui/blog/blog-item-content";
import { IBlogPageProps } from "../../../types/blog";

const categoriesListPromise = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}apis/blog/categories`
  );
  const data = await res.json();
  return data;
};
const popularBlogsPromise = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}apis/blog?category_id=5&paged=1`
  );
  const data = await res.json();
  return data;
};

const BlogItemPage = async ({ params }: IBlogPageProps) => {
  const { slug } = await params;
  const blogPromise = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}apis/blog/${slug}`
    );
    const data = await res.json();
    return data;
  };

  const [blog, popularBlogs, categoriesList] = await Promise.all([
    blogPromise(),
    popularBlogsPromise(),
    categoriesListPromise(),
  ]);
  return (
    <main>
      <BlogItemContent
        date={blog?.[0]?.date}
        htmlContent={blog?.[0]?.content?.rendered}
        title={blog?.[0]?.title?.rendered}
        categoriesList={categoriesList}
        tags={blog?.[0]?.tags}
        popularBlogs={popularBlogs}
      />
    </main>
  );
};

export default BlogItemPage;
