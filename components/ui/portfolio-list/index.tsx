import { IPortfolio } from "../../../types/portfolio";
import PortfolioCard from "./portfolio-card";

const PortfolioList = ({
  className,
  amountMdColumn,
  amountPortfoliosInPerColumn,
  portfolio_list
}: {
  className?: string;
  amountMdColumn: string;
  amountPortfoliosInPerColumn: number;
  portfolio_list:IPortfolio[]
}) => {
  const end =
    amountPortfoliosInPerColumn === 3
      ? amountPortfoliosInPerColumn + 3
      : amountPortfoliosInPerColumn + 4;
  return (
    <div className={`row ${className}`}>
      <div className={`col-md-${amountMdColumn}`}>
        {portfolio_list
          ?.slice(0, amountPortfoliosInPerColumn)
          ?.map((item, index) => {
            return <PortfolioCard key={index} {...item} />;
          })}
      </div>
      <div className={`col-md-${amountMdColumn}`}>
        {portfolio_list
          ?.slice(amountPortfoliosInPerColumn, end)
          ?.map((item, index) => {
            return <PortfolioCard key={index} {...item} />;
          })}
      </div>
      {amountMdColumn === "4" && (
        <div className={`col-md-${amountMdColumn}`}>
          {portfolio_list
            ?.slice(
              end
            )
            ?.map((item, index) => {
              return <PortfolioCard key={index} {...item} />;
            })}
        </div>
      )}
    </div>
  );
};

export default PortfolioList;
