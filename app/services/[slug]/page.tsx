import { notFound } from "next/navigation";
import { IconBoxes } from "../../../components/ui/IconBoxes/IconBoxes";
import { IService, IServicePageProps } from "../../../types/services";
import Image from "next/image";
import { texts } from "../../../lib/texts";

const services_list: IService[] = texts?.servicesPage?.services;

const ServicePage = async ({ params }: IServicePageProps) => {
  const { slug } = await params;
  const mainService = services_list?.filter((item) => item?.slug === slug)[0];
  if (!mainService) {
    notFound()
  }
  return (
    <main>
      <h1 className="mil-display2 text-center mil-mb130">
        {mainService?.title}
      </h1>
      <div className="container mil-relative">
        <div className="row mil-jcc">
          <div className="col-md-10">
            <h2 className="mil-head2 mil-tac mil-mb160">
              <span className="mil-a2">UI/UX</span> design is the art of
              creating simplicity from complexity, turning every{" "}
              <span className="mil-a2">interaction</span> into an intuitive and
              engaging journey.
            </h2>
          </div>
        </div>
      </div>
      <IconBoxes />
      <div className="mil-p-0-100 mil-relative">
        <div className="container">
          <div className="row mil-jcb">
            <div className="col-md-5">
              <p className="mil-text-md mil-mb60">
                At our creative agency, we understand that a successful digital
                product begins with an exceptional user experience. Our UI/UX
                design services are crafted to meet the unique needs of your
                audience while ensuring a visually stunning interface that
                captures attention and fosters engagement. We follow a
                comprehensive design process that includes user research,
                wireframing, visual design, and interaction design, ensuring
                every aspect of your product is optimized for usability and
                delight.
              </p>
              <div className="mil-team-quote mil-mb60">
                <div className="mil-portrait">
                  <Image width={240} height={240} src="/img/team/ceo.jpg" alt="SEO portrait" />
                </div>
                <p className="mil-text-md mil-m1">
                  <span className="mil-bold">Passionately Creating</span> Design
                  Wonders: <br />
                  <span className="mil-bold">Unleashing</span> Boundless
                  Creativity
                </p>
              </div>
              <div className="mil-counter-item mil-mb160">
                <h4>
                  257<span className="mil-a2">+</span>
                </h4>
                <div className="mil-counter-text">
                  <h5 className="mil-head4 mil-m1">
                    Completed projects
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="mil-head4 mil-mb30">
                <span className="mil-a2">01.</span>&nbsp; {mainService?.list[0]}
              </h3>
              <p className="mil-text-md mil-mb60">
                We delve into understanding your target audience through user
                interviews, surveys, and usability tests. This research provides
                insights into user behaviors, preferences, and pain points,
                which we analyze to create detailed personas and journey maps.
                These tools guide our design decisions, ensuring the final
                product meets real user needs.
              </p>
              <h3 className="mil-head4 mil-mb30">
                <span className="mil-a2">02.</span>&nbsp; {mainService?.list[1]}
                
              </h3>
              <p className="mil-text-md mil-mb60">
                In this stage, we transform initial concepts into low-fidelity
                wireframes, outlining structure and user flow. These evolve into
                interactive prototypes, enabling testing and refinement before
                full-scale development. Usability testing here helps us address
                issues early, ensuring a seamless user experience.
              </p>
              <h3 className="mil-head4 mil-mb30">
                <span className="mil-a2">03.</span>&nbsp; {mainService?.list[2]}
              </h3>
              <p className="mil-text-md mil-mb60">
                We turn wireframes into high-fidelity mockups, developing a
                visual style that aligns with your brand and appeals to your
                audience. Elements like typography, color schemes, and imagery
                are meticulously designed for an engaging interface. Design
                systems and style guides ensure consistency across all
                touchpoints.
              </p>
              <h3 className="mil-head4 mil-mb30">
                <span className="mil-a2">04.</span>&nbsp; {mainService?.list[3]}
              </h3>
              <p className="mil-text-md mil-mb30">
                We focus on dynamic elements, creating smooth interactions that
                enhance user experience. Animations, transitions, and
                micro-interactions guide users, making their journey efficient
                and enjoyable. Accessibility is key, ensuring all users can
                interact with your product effortlessly.
              </p>
              <p className="mil-text-md mil-mb60">
                In summary, our UI/UX design services create user-centered
                digital experiences that are visually appealing and highly
                functional. Through rigorous research, thoughtful design, and
                meticulous attention to detail, we deliver products that exceed
                user expectations and help your brand stand out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
