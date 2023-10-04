import React from "react";
import { faqs } from "../store/OtherData";
import AccordionItem from "../components/Others/AccordionItem";

const FAQS = () => {
  return (
    <section className="faq section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                frequently asked questions
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Do you have a burning Question for us? We gat you covered thanks
                for choosing us.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="accordion" id="accordionExample">
              {faqs?.map((i, n) => {
                const num = n + 1;
                return <AccordionItem num={num} {...i} key={n} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQS;
