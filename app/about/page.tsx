
import Hero from "../../components/ui/about/hero"
import Team from "../../components/ui/about/Team/Team"
import Counters from "../../components/ui/Counters/Counters"
import Reviews from "../../components/ui/Reviews/Reviews"
import counters_list from "../../data/about/counters-list"
import { texts } from "../../lib/texts"



const AboutPage = () => {
  return (
    <main>
     <Hero/>
     <Counters counters={counters_list}/>
     <Reviews title={texts?.aboutPage?.reviews?.title} reviewsBlogList={texts?.aboutPage?.reviews?.reviewBlog}/>
     <Team/>
    </main>
  )
}

export default AboutPage