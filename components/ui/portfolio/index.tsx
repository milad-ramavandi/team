import React from "react";
import PortfolioList from "../portfolio-list";
import { portfolios_list } from "../../../data/portfolio/portfolio-list";

const Portfolio = () => {
  return (
    <div className="mil-p-0-130">
      <div className="container-fluid">
        <PortfolioList amountMdColumn="4" amountPortfoliosInPerColumn={4} portfolio_list={portfolios_list}/>
      </div>
    </div>
  );
};

export default Portfolio;
