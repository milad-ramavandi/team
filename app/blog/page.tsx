import Hero from "../../components/ui/blog/hero";
import LatestPublications from "../../components/ui/blog/latest-publications";
import Slider from "../../components/ui/blog/slider";
import Subscribe from "../../components/ui/blog/subscribe";

const BlogPage = () => {
  return (
    <main>
      <Hero />
      <Slider />
      <LatestPublications/>
      <Subscribe/>
    </main>
  );
};

export default BlogPage;
