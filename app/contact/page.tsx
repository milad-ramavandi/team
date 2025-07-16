import ContactForm from "../../components/ui/contact/form";

const ContactPage = () => {
  return (
    <main>
      <section className="container py-5 mil-mt180">
        <div className="d-flex justify-content-start">
          <p className="mil-contact-p">CONTACT US</p>
        </div>
        <div className="row align-items-start">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="mil-contact-heading">
              GET IN TOUCH WITH OUR TEAM FOR{" "}
              <span className="mil-contact-span">INQUIRIES</span> OR SUPPORT.
            </h1>
            <p className="mil-contact-description mil-mb30">
              OUR DEDICATED EXPERTS COMBINE PASSION AND DEEP EXPERTISE TO
              DELIVER TOP-QUALITY SUPPORT, ENSURING YOUR NEEDS ARE MET WITH
              EXCEPTIONAL CARE AND PROFESSIONALISM.
            </p>
            <p className="mil-contact-description">
              OUR COMMITTED TEAM LEVERAGES EXTENSIVE KNOWLEDGE AND ENTHUSIASM TO
              PROVIDE OUTSTANDING ASSISTANCE, GUARANTEEING YOUR REQUIREMENTS ARE
              ADDRESSED WITH UTMOST PRECISION AND DEDICATION.
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
