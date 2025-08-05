import { notFound } from "next/navigation";
import Details from "../../../components/ui/portfolio/portfolio-item/details";
import Hero from "../../../components/ui/portfolio/portfolio-item/hero";
import NextProject from "../../../components/ui/portfolio/portfolio-item/next-project";
import { texts } from "../../../lib/texts";
import { IPortfolio } from "../../../types/portfolio";


const portfolios_list:IPortfolio[] = texts?.portfolio_list

const PortfolioSinglePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const mainPortfolio = portfolios_list?.filter((item) => item?.id === slug)[0];
  const nextProject = portfolios_list?.filter(
    (item) => Number(item?.id) === Number(mainPortfolio?.id) + 1
  )[0];
  if (!mainPortfolio) {
    notFound()
  }
  return (
    <main>
      <Hero portfolioTitle={mainPortfolio?.title} />
      <Details portfolioImage={mainPortfolio?.imageUrl} />
      <NextProject
        portfolioSlug={nextProject?.id}
        portfolioTitle={nextProject?.title}
        portfolioImage={nextProject?.imageUrl}
      />
    </main>
  );
};

export default PortfolioSinglePage;
