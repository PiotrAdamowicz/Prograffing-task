/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from "react";
import arrow from "../../svg/questionArrow.svg";

export default function List(props) {
  const listData = [
    {
      title: "What is Transport",
      text: "The four means of transportation are airways, roadways, railways, and waterways. The means of transport is a term used to describe the different types of transportation systems used to take goods or persons from one place to another. Other means include cable transport and pipelines.",
      id: 0,
      active: false,
    },
    {
      title: "How To Cargo",
      text: "The four means of transportation are airways, roadways, railways, and waterways. The means of transport is a term used to describe the different types of transportation systems used to take goods or persons from one place to another. Other means include cable transport and pipelines.",
      id: 1,
      active: false,
    },
    {
      title: "How Much Is Delivery",
      text: "The four means of transportation are airways, roadways, railways, and waterways. The means of transport is a term used to describe the different types of transportation systems used to take goods or persons from one place to another. Other means include cable transport and pipelines.",
      id: 2,
      active: false,
    },
  ];

  const [item0, setItem0] = useState(listData[0]);
  const [item1, setItem1] = useState(listData[1]);
  const [item2, setItem2] = useState(listData[2]);

  useEffect(() => {}, [item0, item1, item2]);

  const clickHandler = (event) => {
    const item = event.target.id;
    const { title, text, id, active } = listData[item];
    const res = { title, text, id, active: !active };
    switch (item) {
      case `${item0.id}`:
        setItem0(res);
        console.log(`item ${item0.id} clicked`);
        console.log(item0);
        break;
      case `${item1.id}`:
        console.log(`item ${item1.id} clicked`);
        setItem1(res);
        console.log(item1);
        break;
      case `${item2.id}`:
        console.log(`item ${item2.id} clicked`);
        setItem2(res);
        console.log(item2);
        break;
      default:
        break;
    }
  };

  return (
    <ul role="list" className="faq__list">
      {listData.map((item) => {
        let res;
        if (item.active) {
          res = (
            <li id={item.id} key={item.id} className="faq__item">
              <div className="faq__question">
                <h4 className="faq__itemTitle">{item.title}</h4>
                <button
                  id={item.id}
                  onClick={clickHandler}
                  className="faq__arrowBtn"
                >
                  <img id={item.id} src={arrow} alt="" />
                </button>
              </div>
              <p className="faq__itemText">{item.text}</p>
            </li>
          );
        } else {
          res = (
            <li id={item.id} key={item.id} className="faq__item">
              <div className="faq__question">
                <h4 className="faq__itemTitle">{item.title}</h4>
                <button
                  id={item.id}
                  onClick={clickHandler}
                  className="faq__arrowBtn"
                >
                  <img id={item.id} src={arrow} alt="" />
                </button>
              </div>
            </li>
          );
        }
        return res;
      })}
    </ul>
  );
}
