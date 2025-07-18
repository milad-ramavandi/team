import ContactForm from "../../components/ui/contact/form";
import { texts } from "../../lib/texts";

const ContactPage = () => {
  return (
    <main>
      <section className="container py-5 mil-mt180">
        <div className="d-flex justify-content-start">
          <p className="mil-contact-p">{texts?.contactPage?.p1}</p>
        </div>
        <div className="row align-items-start">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="mil-contact-heading">
              {texts?.contactPage?.h1?.heading1}{" "}
              <span className="mil-contact-span">{texts?.contactPage?.h1?.span}</span> {texts?.contactPage?.h1?.heading2} 
            </h1>
            <p className="mil-contact-description mil-mb30">
              {texts?.contactPage?.p2}
            </p>
            <p className="mil-contact-description">
              {texts?.contactPage?.p3}
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-start">
            <ContactForm/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
