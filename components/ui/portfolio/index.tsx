
import { texts } from "../../../lib/texts";
import PortfolioList from "../portfolio-list";

const Portfolio = () => {
  return (
    <div className="mil-p-0-130">
      <div className="container-fluid">
        <PortfolioList amountMdColumn="4" amountPortfoliosInPerColumn={4} portfolio_list={texts?.portfolio_list}/>
      </div>
    </div>
  );
};

export default Portfolio;
