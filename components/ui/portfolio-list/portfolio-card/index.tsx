import Link from "next/link";
import React from "react";
import { texts } from "../../../../lib/texts";
import { IPortfolio } from "../../../../types/portfolio";

const PortfolioCard = ({imageUrl, title, template}:IPortfolio) => {
  return (
    <div className="mil-work-card mil-stl mil-mb30">
      <div className={`mil-cover ${template}`}>
        <div className="mil-hover-frame">
          <img
            src={imageUrl}
            alt="cover"
            // className="mil-scale-img"
            data-value-1="1.15"
            data-value-2="1"
          />
        </div>
      </div>
      <div className="mil-hover-overlay">
        <Link href="project-1-stl.html" className="mil-descr">
          <div className="mil-text-frame">
            <h4 className="mil-head4 mil-max-1row-text mil-m1 mil-c-gone">
              {title}
            </h4>
          </div>
          <div className="mil-768-gone mil-c-gone">
            <div className="mil-stylized-btn mil-a1">
              <i className="fal fa-arrow-up"></i>
              <span>{texts.homePage.portfolio.button2}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
