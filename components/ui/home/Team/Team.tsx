
import { IMember } from "../../../../types/team";
import Member from "./TeamMember";
import { texts } from "../../../../lib/texts";
import Link from "next/link";

const members: IMember[] = texts.homePage.team.members;

const Team = () => {
  return (
    <div className="mil-p-0-130 mil-768-p-160-145" id="team">
      <div className="container">
        <div className="row mil-aie mil-mb30">
          <div className="col-lg-6">
            <h2 className="mil-head1 mil-mb60">
              {texts.homePage.team.h2.span1}<span className="mil-a1">{texts.homePage.team.h2.span2}</span>
            </h2>
          </div>
          <div className="col-lg-6">
            <p className="mil-stylized mil-m1 mil-tar mil-768-tal mil-mb60">
              <Link href="#home" className="mil-arrow-link mil-c-gone">
                {texts.homePage.team.button}
              </Link>
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
