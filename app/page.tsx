import Counters from "../components/ui/Counters/Counters";
import AboutMe from "../components/ui/home/About/AboutMe";
import AboutUs from "../components/ui/home/About/AboutUs";
import Banner from "../components/ui/home/Banner/Banner";
import CallAction from "../components/ui/home/CallAction/CallAction";
import { IconBoxes } from "../components/ui/home/IconBoxes/IconBoxes";
import Partners from "../components/ui/home/Partners/Partners";
import Portfolio from "../components/ui/home/Portfolio/Portfolio";
import Reviews from "../components/ui/home/Reviews/Reviews";
import Team from "../components/ui/home/Team/Team";
import counters_list from "../data/home/counters-list";


export default function Home() {
  return (
    <main>
      <Banner/>
      <AboutMe/>
      <Counters counters={counters_list}/>
      <AboutUs/>
      <IconBoxes/>
      <Portfolio/>
      <Team/>
      <Reviews title="reviews"/>
      <Partners/>
      <CallAction/>
    </main>
  );
}
