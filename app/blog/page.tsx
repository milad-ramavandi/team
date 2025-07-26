import BlogsContent from "../../components/ui/blog/blogs-content";

const BlogsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    paged: string;
    tag_id: string;
    search: string;
    category_id: string;
  }>;
}) => {
  const { paged, tag_id, search, category_id } = await searchParams;
  const page = Number(paged) || 1;
  return (
    <main>
      <BlogsContent
        page={page ? page : 1}
        tag_id={tag_id}
        search={search ?? ""}
        category_id={category_id ?? ""}
      />
    </main>
  );
};

export default BlogsPage;
