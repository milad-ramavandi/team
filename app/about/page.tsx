
import Hero from "../../components/ui/about/hero"
import Team from "../../components/ui/about/Team/Team"
import Counters from "../../components/ui/Counters/Counters"
import Reviews from "../../components/ui/Reviews/Reviews"
import counters_list from "../../data/about/counters-list"



const AboutPage = () => {
  return (
    <main>
     <Hero/>
     <Counters counters={counters_list}/>
     <Reviews title="about team"/>
     <Team/>
    </main>
  )
}

export default AboutPage