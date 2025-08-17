import { notFound } from "next/navigation";
import { texts } from "../../../lib/texts";
import Cover from "../../../components/ui/blog/cover";

const BlogSinglePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const mainBlog = texts.blogs.filter((item) => item?.slug === slug)[0];
  if (!mainBlog) {
    notFound();
  }
  return <>
   <Cover title={mainBlog?.title} imageUrl={mainBlog?.imageUrl}/>
  </>;
};

export default BlogSinglePage;
