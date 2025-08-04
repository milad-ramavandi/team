import Details from "../../../components/ui/portfolio/portfolio-item/details";
import Hero from "../../../components/ui/portfolio/portfolio-item/hero";
import NextProject from "../../../components/ui/portfolio/portfolio-item/next-project";
import { portfolios_list } from "../../../data/portfolio/portfolio-list";

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
