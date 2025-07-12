import { IMember } from "@/types/team";
import Member from "./Member";

const members: IMember[] = [
  { imageUrl: "img/team/9 2.jpg", name: "James", career: "UI/UX Designer" },
  { imageUrl: "img/team/10 2.jpg", name: "Edward", career: "QA engineer" },
  { imageUrl: "img/team/11 2.jpg", name: "Monica", career: "Web Developer" },
  { imageUrl: "img/team/12 2.jpg", name: "Paul", career: "Art Director" },
];

const Team = () => {
  return (
    <div className="mil-p-0-40" style={{ marginTop: "300px" }}>
      <div className="container">
        <div className="row mil-jcb mil-aic">
          <div className="col-lg-5 mil-mb90">
            <p className="mil-stylized mil-m2 mil-mb60 mil-up">Team members</p>
            <h2 className="mil-head1 mil-mb30 mil-up">
              Meet Our <span className="mil-a2">Team</span>
            </h2>
            <p className="mil-text-md mil-mb30 mil-up">
              Our team at PIXY is a symbol of creativity and innovation. We
              ambitiously bring forward-thinking ideas to life across various
              creative disciplines. With great enthusiasm and dedication, we
              approach each project with seriousness and a commitment to high
              standards.
            </p>
            <div className="mil-team-quote mil-mb60 mil-up">
              <div className="mil-portrait">
                <img src="img/team/ceo.jpg" alt="SEO portrait" />
              </div>
              <p className="mil-text-md mil-m1">
                <span className="mil-bold">Passionately Creating</span> Design
                Wonders: <br />
                <span className="mil-bold">Unleashing</span> Boundless
                Creativity
              </p>
            </div>
            <div className="mil-up">
              <a href="team-frl.html" className="mil-btn mil-a1 mil-c-gone">
                Read more
              </a>
            </div>
          </div>
          <div className="col-lg-6 mil-mb90">
            <div className="row">
              <div className="col-md-6">
                {members.slice(0, 2).map((item, index) => {
                  return <Member key={index} {...item} />;
                })}
              </div>
              <div className="col-md-6 mil-mt60">
                {members.slice(2, 4).map((item, index) => {
                  return <Member key={index} {...item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
