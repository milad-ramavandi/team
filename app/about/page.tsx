import Hero from "../../components/ui/about/hero"
import Counters from "../../components/ui/Counters/Counters"
import counters_list from "../../data/about/counters-list"



const AboutPage = () => {
  return (
    <>
     <Hero/>
     <Counters counters={counters_list}/>
     {/* <Reviews title="about team"/> */}
     {/* <Team/> */}
    </>
  )
}

export default AboutPage