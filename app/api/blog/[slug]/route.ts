import { NextRequest } from "next/server";

import api from "../..";
import endpoints from "../../config/endpoints";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  const url = `${process.env.NEXT_BLOG_API_URL}${endpoints.blogs.singleBlog}${slug ? `?slug=${slug}` : ""}`;

  try {
    const res = await api(url);
    if (!res?.ok) {
      return new Response("Failed to fetch blog", { status: res?.status });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("Blog fetch error:", error);
    return new Response("Something went wrong", { status: 500 });
  }
}
