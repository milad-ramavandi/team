
import { IMember } from "../../../../types/team";
import Member from "./TeamMember";

const members: IMember[] = [
  { imageUrl: "img/team/9 2.jpg", name: "James", career: "UI/UX Designer" },
  { imageUrl: "img/team/10 2.jpg", name: "Edward", career: "QA engineer" },
  { imageUrl: "img/team/11 2.jpg", name: "Monica", career: "Web Developer" },
  { imageUrl: "img/team/12 2.jpg", name: "Paul", career: "Art Director" },
];

const Team = () => {
  return (
    <div className="mil-p-0-130 mil-768-p-160-145" id="team">
      <div className="container">
        <div className="row mil-aie mil-mb30">
          <div className="col-lg-6">
            <h2 className="mil-head1 mil-mb60">
              Meet Our <span className="mil-a1">Team</span>
            </h2>
          </div>
          <div className="col-lg-6">
            <p className="mil-stylized mil-m1 mil-tar mil-768-tal mil-mb60">
              <a href="#home" className="mil-arrow-link mil-c-gone">
                View all members
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {members.map((item, index) => {
            return (
              <Member key={index} {...item}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
