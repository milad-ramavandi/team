import Services from "../../components/ui/services";
import { texts } from "../../lib/texts";

const ServicesPage = () => {
  return (
    <main>
      <h1 className="mil-display2 text-center">
        {texts?.servicesPage?.h1?.span1} <span className="mil-a2">{texts?.servicesPage?.h1?.span2}</span>
      </h1>
      <Services />
    </main>
  );
};

export default ServicesPage;
