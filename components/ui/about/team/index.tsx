import Link from "next/link";
import { texts } from "../../../../lib/texts";
import { IMember } from "../../../../types/team";
import Member from "./member";

const members: IMember[] = texts?.members?.slice(0, 4);

const Team = () => {
  return (
    <div className="mil-team-about-bg mil-team-about-p mil-mb130">
      <div className="container">
        <div className="row mil-jcb mil-aic">
          <div className="col-lg-5 mil-mb90">
            <p className="mil-stylized mil-m2 mil-mb60">
              {texts?.aboutPage?.team?.p}
            </p>
            <h2 className="mil-head1 mil-mb30">
              {texts?.aboutPage?.team?.h2?.span1}{" "}
              <span className="mil-a2">
                {texts?.aboutPage?.team?.h2?.span2}
              </span>
            </h2>

            <p className="mil-text-md mil-mb30 mil-deco-text mil-mb90">
              {texts?.aboutPage?.team?.p2}
            </p>
            <div>
              <Link href="/team" className="mil-btn mil-a1 mil-c-gone">
                {texts?.aboutPage?.team?.button}
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6">
                {members.slice(0, 2).map((item, index) => {
                  const isLarge = index === 1;
                  return <Member key={index} {...item} isLarge={isLarge} />;
                })}
              </div>
              <div className="col-md-6">
                {members.slice(2, 4).map((item, index) => {
                  const isLarge = index === 0;
                  return <Member key={index} {...item} isLarge={isLarge} />;
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
