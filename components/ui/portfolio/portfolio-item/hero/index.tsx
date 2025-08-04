import Breadcrumb from "../../../breadcrumb";

const Hero = ({portfolioTitle}:{portfolioTitle:string}) => {
  return (
    <div className="container d-flex flex-column text-center mil-mt180 overflow-hidden mil-relative">
      <Breadcrumb />
      <h1 className="mil-display2 mil-mb130 w-100 text-center">
        {portfolioTitle}
      </h1>
    </div>
  );
};

export default Hero;