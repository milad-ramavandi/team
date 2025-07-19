
import Link from "next/link";
import { IMember } from "../../../../types/team";

const Member = ({ imageUrl, name, career, isLarge }: IMember) => {
  return (
    <div className={`mil-team-card mil-mb30 ${isLarge ? "mil-team-card-large" : "mil-team-card-small"}`}>
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
          <h4 className="mil-head4 mil-m4 mil-mb20">{name}</h4>
          <ul className="mil-social mil-m1 mil-mb20 mil-c-gone p-0">
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
          </ul>
          <p className="mil-stylized mil-m2 text-black">{career}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
