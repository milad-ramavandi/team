import ContactForm from "../../components/ui/contact/form";
import Hero from "../../components/ui/contact/hero";
import { texts } from "../../lib/texts";

const ContactPage = () => {
  return (
    <main>
      <Hero />
      <div className="container mil-p-160-0" id="contact">
        <div className="d-flex justify-content-start">
          <p className="mil-stylized mil-m2 mil-mb60">{texts?.contactPage?.p1}</p>
        </div>
        <div className="row align-items-start">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h2 className="mil-head1">
              {texts?.contactPage?.h2?.heading1}{" "}
              <span className="mil-a1">
                {texts?.contactPage?.h2?.span}
              </span>{" "}
              {texts?.contactPage?.h2?.heading2}
            </h2>
            <p className="mil-text-md mil-mb30">
              {texts?.contactPage?.p2}
            </p>
            <p className="mil-text-md">{texts?.contactPage?.p3}</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-start">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
