import React from "react";
import Hero from "../../components/ui/portfolio/hero";
import Portfolio from "../../components/ui/portfolio";
import CallAction from "../../components/ui/portfolio/call-action";

const PortfolioPage = () => {
  return (
    <main>
      <Hero />
      <Portfolio />
      <CallAction/>
    </main>
  );
};

export default PortfolioPage;
