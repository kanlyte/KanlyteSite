import React from "react";

const AccordionItem = ({ num, qn, ans }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${num}`}>
        <button
          className={
            num === 1 ? "accordion-button" : "accordion-button collapsed"
          }
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${num}`}
          aria-expanded={num === 1 ? "true" : "false"}
          aria-controls={`collapse${num}`}
        >
          <span className="title">{qn}</span>
          <i className="las la-plus"></i>
        </button>
      </h2>
      <div
        id={`collapse${num}`}
        className={
          num === 1
            ? "accordion-collapse collapse show"
            : "accordion-collapse collapse"
        }
        aria-labelledby={`heading${num}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {ans?.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
