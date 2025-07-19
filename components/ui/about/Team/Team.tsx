import Link from "next/link";
import { texts } from "../../../../lib/texts";
import { IMember } from "../../../../types/team";
import Member from "./Member";

const members: IMember[] = texts?.aboutPage?.team?.members;

const Team = () => {
  return (
    <div className="mil-team-about-bg mil-team-about-p">
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

            {/* <div className="mil-team-quote mil-mb60">
              <div className="mil-portrait">
                <img src="../img/team/ceo.jpg" alt="SEO portrait" />
              </div>
              <p className="mil-text-md mil-m1">
                <span className="mil-bold">
                  {texts?.aboutPage?.team?.p3?.span1}
                </span>{" "}
                {texts?.aboutPage?.team?.p3?.para1} <br />
                <span className="mil-bold">
                  {texts?.aboutPage?.team?.p3?.span2}
                </span>{" "}
                {texts?.aboutPage?.team?.p3?.para2}
              </p>
            </div> */}
            <div>
              <Link href="team-frl.html" className="mil-btn mil-a1 mil-c-gone">
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
