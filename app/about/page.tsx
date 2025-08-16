import Hero from "../../components/ui/about/hero";
import Team from "../../components/ui/about/Team/Team";
import Counters from "../../components/ui/counters";
import Reviews from "../../components/ui/reviews";
import { texts } from "../../lib/texts";



const AboutPage = () => {
  return (
    <main>
      <Hero />
      <Counters counters={texts?.aboutPage?.counters} />
      <Reviews
        title={texts?.aboutPage?.reviews?.title}
        reviewsBlogList={texts?.aboutPage?.reviews?.reviewBlog}
        isDescription={false}
        isTitle={false}
      />
      <Team />
    </main>
  );
};

export default AboutPage;
