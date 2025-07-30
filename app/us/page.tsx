import BlogList from "../../components/ui/blog-list"
import ContactUs from "../../components/ui/contact-us"
import TeamList from "../../components/ui/team-list"
import Cover from "../../components/ui/us/cover"
import Hero from "../../components/ui/us/hero"
import Services from "../../components/ui/us/services"


const USPage = () => {
  return (
    <main>
      <Hero/>
      <Cover/>
      <Services/>
      <BlogList/>
      <TeamList/>
      <ContactUs/>
    </main>
  )
}

export default USPage