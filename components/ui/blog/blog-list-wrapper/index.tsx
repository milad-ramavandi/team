import BlogsList from "../blogs-list";

const BlogsListWrapper = async ({
  page,
  search,
  tag_id,
  categoryId,
}: {
  page?: number;
  search?: string;
  tag_id?: string;
  categoryId?: string;
}) => {


  const queryParams = new URLSearchParams();

  if (tag_id) queryParams.append("tag_id", tag_id);
  if (categoryId) queryParams.append("category_id", categoryId);
  if (page) queryParams.append("paged", page.toString());
  if (search) queryParams.append("search", search);
  const url = `${process.env.NEXT_PUBLIC_API_URL}apis/blog${
    queryParams.toString() ? `?${queryParams}` : ""
  }`;
  const res = await fetch(url, {
    cache: "no-store",
    next: { revalidate: 0 }
  });
  await new Promise((resolve) => setTimeout(resolve, 500)); // test to show skeleton
  const blogsListResponse = await res.json();
  return <BlogsList blogsList={blogsListResponse} />;
};

export default BlogsListWrapper;
