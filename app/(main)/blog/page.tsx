import Banner from "../../../components/blog/Banner";
import LatestPublications from "../../../components/blog/LatestPublications";
import Slider from "../../../components/blog/Slider";
import Subscribe from "../../../components/blog/Subscribe";

export default function BlogPage() {
  return (
    <div className="mil-transition-fade" id="swup">
      <div className="mil-transition-frame">
        <div id="smooth-content" className="mil-content">
          <Banner />
          <Slider />
          <LatestPublications />
          <Subscribe />
        </div>
      </div>
    </div>
  );
}
