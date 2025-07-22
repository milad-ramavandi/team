import Banner from "../../components/ui/blog/Banner";
import LatestPublications from "../../components/ui/blog/LatestPublications";
import Slider from "../../components/ui/blog/Slider";
import Subscribe from "../../components/ui/blog/Subscribe";



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
