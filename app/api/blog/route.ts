import { NextRequest } from "next/server";
import endpoints from "../config/endpoints";
import api from "..";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tag_id = searchParams.get("tag_id");
  const category_id = searchParams.get("category_id");
  const page = searchParams.get("paged");
  const search = searchParams.get("search");

  const query = new URLSearchParams();
  if (tag_id) query.append("tag_id", tag_id);
  if (category_id) query.append("category_id", category_id);
  if (page) query.append("paged", page);
  if (search) query.append("search", search);

  const url = `${process.env.NEXT_BLOG_API_URL}${endpoints.blogs.blogsList}${query.toString() ? `?${query.toString()}` : ""}`;

  try {
    const res = await api(url);
    if (!res?.ok) {
      return new Response("Failed to fetch blogs", { status: res?.status });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("Blogs fetch error:", error);
    return new Response("Something went wrong", { status: 500 });
  }
}
