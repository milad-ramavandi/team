const api = async (url: string, option?: RequestInit) => {
  try {
    const res = await fetch(`${process.env.NEXT_BLOG_API_URL}${url}`, option);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res;
  } catch (error) {
    console.log("Final fetch error:", error);
    // throw error;
  }
};

export default api;