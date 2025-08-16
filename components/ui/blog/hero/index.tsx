import { texts } from "../../../../lib/texts";
import Breadcrumb from "../../breadcrumb";


export default function Hero() {
  return (
    <>
      <div className="container d-flex flex-column text-center mil-mt180 overflow-hidden mil-relative">
        <Breadcrumb />

        <h1 className="mil-display4 mil-mb130 w-100 text-center">
          {texts?.blogPage?.hero?.h1}
        </h1>
      </div>
    </>
  );
}