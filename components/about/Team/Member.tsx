import { IMember } from "../../../types/team";
import React from "react";


const Member = ({ imageUrl, name, career }: IMember) => {
  return (
    <div className="mil-team-card mil-mb30 mil-up">
      <div className="mil-hover-frame">
        <img
          src={imageUrl}
          alt="team member"
          className="mil-scale-img"
          data-value-1="1.20"
          data-value-2="1"
        />
      </div>
      <div className="mil-hover-overlay">
        <div className="mil-descr">
          <h4 className="mil-head4 mil-m4 mil-mb20">{name}</h4>
          <ul className="mil-social mil-mb20 mil-c-gone">
            <li>
              <a href="#.">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#.">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="#.">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="#.">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a href="#.">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
          <p className="mil-stylized mil-m4">{career}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
