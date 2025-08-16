import Counters from "../components/ui/counters";
import AboutUs from "../components/ui/home/about-us";
import CallAction from "../components/ui/home/call-action";
import Hero from "../components/ui/home/hero";
import Partners from "../components/ui/home/partners";
import Portfolio from "../components/ui/home/portfolio";
import TeamList from "../components/ui/team-list";
import { IconBoxes } from "../components/ui/icon-boxes";
import Reviews from "../components/ui/reviews";
import { texts } from "../lib/texts";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <IconBoxes />
      <Counters counters={texts?.homePage?.counters} />
      <Portfolio />
      <TeamList />
      <Reviews
        title={texts.homePage.reviews.title}
        reviewsBlogList={texts?.homePage?.reviews?.reviewBlog}
        isDescription
        isTitle
      />
      <Partners />
      <CallAction />
    </main>
  );
}
