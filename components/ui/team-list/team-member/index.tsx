import Link from "next/link";
import { IMember } from "../../../../types/team";

interface ITeamMember extends IMember {
  amount_col_lg: number;
}

const TeamMember = ({
  imageUrl,
  name,
  slug,
  career,
  amount_col_lg,
}: ITeamMember) => {
  return (
    <Link href={`/team/${slug}`} className={`col-md-6 col-lg-${amount_col_lg}`}>
      <div className="mil-team-card mil-stl mil-mb30 mil-768-mb-15">
        <div className="mil-hover-frame">
          <img
            src={imageUrl}
            alt="team member"
            // className="mil-scale-img"
            data-value-1="1.20"
            data-value-2="1"
          />
        </div>
        <div className="mil-hover-overlay">
          <div className="mil-descr">
            <h4 className="mil-head4 mil-m1 mil-mb20">{name}</h4>
            {/* <ul className="mil-social mil-m1 mil-mb20 mil-c-gone p-0">
                <li>
                  <Link href="#." target="_blank" data-no-swup>
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#." target="_blank" data-no-swup>
                    <i className="fab fa-behance"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#." target="_blank" data-no-swup>
                    <i className="fab fa-dribbble"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#." target="_blank" data-no-swup>
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#." target="_blank" data-no-swup>
                    <i className="fab fa-github"></i>
                  </Link>
                </li>
              </ul> */}
            <p className="mil-stylized mil-a1">{career}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeamMember;
