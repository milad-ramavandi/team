const api = async (url: string, option?: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, option);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res;
  } catch (error) {
    // if (retries > 0) {
    //   await new Promise((resolve) => setTimeout(() => resolve, delay));
    //   return api(url, option, retries - 1, delay * 2);
    // }
    console.log("Final fetch error:", error);
    // throw error;
  }
};

export default api;