import Hero from "../../components/ui/about/hero";
import Services from "../../components/ui/about/services";
import Team from "../../components/ui/about/team";
import BlogList from "../../components/ui/blog-list";
import ContactUs from "../../components/ui/contact-us";
import Reviews from "../../components/ui/reviews";
import { texts } from "../../lib/texts";

const AboutPage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <BlogList/>
      <Team />
      <Reviews
        title={texts?.aboutPage?.reviews?.title}
        reviewsBlogList={texts?.aboutPage?.reviews?.reviewBlog}
        isDescription={false}
        isTitle={false}
      />
      <ContactUs/>
    </main>
  );
};

export default AboutPage;
