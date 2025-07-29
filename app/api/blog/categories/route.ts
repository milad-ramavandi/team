import api from "../..";
import endpoints from "../../config/endpoints";

export async function GET() {
  const url = `${endpoints.blogs.catogoriesList}`;

  try {
    const res = await api(url);
    if (!res?.ok) {
      return new Response("Failed to fetch categories", { status: res?.status });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("Categories blog fetch error:", error);
    return new Response("Something went wrong", { status: 500 });
  }
}
