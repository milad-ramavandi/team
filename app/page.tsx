import Counters from "../components/ui/Counters/Counters";
import AboutMe from "../components/ui/home/About/AboutMe";
import AboutUs from "../components/ui/home/About/AboutUs";
import CallAction from "../components/ui/home/CallAction/CallAction";
import Hero from "../components/ui/home/hero";
import Partners from "../components/ui/home/Partners/Partners";
import Portfolio from "../components/ui/home/Portfolio/Portfolio";
import TeamList from "../components/ui/team-list";
import { IconBoxes } from "../components/ui/IconBoxes/IconBoxes";
import Reviews from "../components/ui/Reviews/Reviews";
import { texts } from "../lib/texts";
import BlogList from "../components/ui/blog-list";



export default function Home() {
  return (
    <main>
      <div className="overflow-hidden">
        <Hero />
        <AboutMe />
        <IconBoxes />
        <AboutUs />
        <Counters counters={texts?.homePage?.counters} />
        <Portfolio />
        <BlogList/>
        <TeamList />
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
