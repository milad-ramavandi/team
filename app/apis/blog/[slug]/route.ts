import api from "../..";
import endpoints from "../../config/endpoints";

export async function GET(_: Request, context: { params: { slug: string } }) {
  const slug = context.params.slug;
  const url = `${endpoints.blogs.singleBlog}${slug ? `?slug=${slug}` : ""}`;

  try {
    const res = await api(url);
    if (!res?.ok) {
      return new Response("Failed to fetch blog", { status: res?.status });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
