import React, { useState } from "react";
import arrow from "../../svg/questionArrow.svg";

export default function DropdownItem(props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      id={item.id}
      key={item.id}
      className={`faq__item ${isOpen ? "faq__item--active" : ""}`}
    >
      <div className="faq__question">
        <h4 className="faq__itemTitle">{item.label}</h4>
        <button id={item.id} onClick={clickHandler} className="faq__arrowBtn">
          <img
            className={`faq__arrow ${isOpen ? "faq__arrow--active" : ""}`}
            id={item.id}
            src={arrow}
            alt="arrow down icon"
          />
        </button>
      </div>
      <div className={`faq__answer ${isOpen ? "faq__answer--active" : ""}`}>
        <p className={`faq__itemText ${isOpen ? "faq__itemText--active" : ""}`}>
          {item.text}
        </p>
      </div>
    </li>
  );
}
