import Link from "next/link";
import { texts } from "../../../../lib/texts";
import PortfolioList from "../../portfolio-list";
import { portfolio_list } from "../../../../data/home/portfolio_list";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row mil-aie mil-mb30">
        <div className="col-md-7">
          <h2 className="mil-head1 mil-mb60">
            {texts.homePage.portfolio.h2.span1}
            <span className="mil-a2">{texts.homePage.portfolio.h2.span2}</span>
            {texts.homePage.portfolio.h2.span3}
          </h2>
        </div>
        <div className="col-md-5">
          <p className="mil-stylized mil-m1 mil-tar mil-768-tal mil-mb60">
            <Link
              href="/portfolio"
              className="mil-arrow-link mil-c-gone"
            >
              View all
            </Link>
          </p>
        </div>
      </div>
      <PortfolioList className="mil-mb60" amountMdColumn="6" amountPortfoliosInPerColumn={3} portfolio_list={portfolio_list}/>
      <div className="row mil-aic mil-p-0-130">
        <div className="col-md-6 mil-mb30">
          <p className="mil-text-md mil-deco-text">
            {texts.homePage.portfolio.p1}
            <br />
            {texts.homePage.portfolio.p2}
          </p>
        </div>
        <div className="col-md-6 mil-jce mil-768-jcs mil-mb30">
          <span>
            <Link
              href="/portfolio"
              className="mil-btn mil-a2 mil-c-gone"
            >
              {texts.homePage.portfolio.button3}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
