/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import Slideshow from "../utils/Slideshow";
import List from "../utils/List";

export default function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="faq__container">
        <p className="faq__sectionName">Still have questions?</p>
        <h2 className="faq__title">Frequently Asked Questions</h2>
        <p className="faq__text1">
          Air transportation has become the primary means of common-carrier
          traveling. Air transportation also provides a communication or medical
          link.
        </p>
        <List />
      </div>
      <Slideshow block={"faq"} />
    </section>
  );
}
