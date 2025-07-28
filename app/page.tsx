import Counters from "../components/ui/Counters/Counters";
import AboutMe from "../components/ui/home/About/AboutMe";
import AboutUs from "../components/ui/home/About/AboutUs";
import Blog from "../components/ui/home/blog";
import CallAction from "../components/ui/home/CallAction/CallAction";
import Hero from "../components/ui/home/hero";
import Partners from "../components/ui/home/Partners/Partners";
import Portfolio from "../components/ui/home/Portfolio/Portfolio";
import Team from "../components/ui/home/Team/Team";
import { IconBoxes } from "../components/ui/IconBoxes/IconBoxes";
import Reviews from "../components/ui/Reviews/Reviews";
import counters_list from "../data/home/counters-list";
import { texts } from "../lib/texts";



export default function Home() {
  return (
    <main>
      <div className="overflow-hidden">
        <Hero />
        <AboutMe />
        <IconBoxes />
        <AboutUs />
        <Counters counters={counters_list} />
        <Portfolio />
        <Blog/>
        <Team />
        <Reviews
          title={texts.homePage.reviews.title}
          reviewsBlogList={texts?.homePage?.reviews?.reviewBlog}
          isDescription
          isTitle
        />
        <Partners />
        <CallAction />
      </div>
    </main>
  );
}
