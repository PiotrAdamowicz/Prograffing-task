import React from "react";
import Slideshow from "../utils/Slideshow";

const listData = [
  {
    title: "What is Transport",
    text: "The four means of transportation are airways, roadways, railways, and waterways. The means of transport is a term used to describe the different types of transportation systems used to take goods or persons from one place to another. Other means include cable transport and pipelines.",
    id: 0,
  },
  {
    title: "How To Cargo",
    text: "The four means of transportation are airways, roadways, railways, and waterways. The means of transport is a term used to describe the different types of transportation systems used to take goods or persons from one place to another. Other means include cable transport and pipelines.",
    id: 1,
  },
  {
    title: "How Much Is Delivery",
    text: "The four means of transportation are airways, roadways, railways, and waterways. The means of transport is a term used to describe the different types of transportation systems used to take goods or persons from one place to another. Other means include cable transport and pipelines.",
    id: 2,
  },
];

export default function Faq() {
  return (
    <section id="faq" className="faq">
      <p className="faq__sectionName">Still have questions?</p>
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <p className="faq__text1">
        Air transportation has become the primary means of common-carrier
        traveling. Air transportation also provides a communication or medical
        link.
      </p>
      <ul className="faq__list">
        <li className="faq__item"></li>
        {listData.map((item) => (
          <li key={item.id} className="faq__item">
            <h4 className="faq__itemTitle">{item.title}</h4>
            <button className="faq__arrowBtn">arrow</button>
            <p className="faq__itemText">{item.text}</p>
          </li>
        ))}
      </ul>
      <Slideshow />
    </section>
  );
}
