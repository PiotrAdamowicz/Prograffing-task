/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import DropdownItem from "./DropdownItem";

export default function List(props) {
  const listData = [
    {
      label: "What is Transport",
      key: 0,
      text: "The four means of transportation are airways, roadways, railways, and waterways. The means of transport is a term used to describe the different types of transportation systems used to take goods or persons from one place to another. Other means include cable transport and pipelines.",
      active: false,
    },
    {
      label: "How To Cargo",
      text: "The four means of transportation are airways, roadways, railways, and waterways. The means of transport is a term used to describe the different types of transportation systems used to take goods or persons from one place to another. Other means include cable transport and pipelines.",
      key: 1,
      active: false,
    },
    {
      label: "How Much Is Delivery",
      text: "The four means of transportation are airways, roadways, railways, and waterways. The means of transport is a term used to describe the different types of transportation systems used to take goods or persons from one place to another. Other means include cable transport and pipelines.",
      key: 2,
      active: false,
    },
  ];
  //TODO: styling of p.itemText

  return (
    <ul role="list" className="faq__list">
      {listData.map((item) => (
        <DropdownItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

// const [item0, setItem0] = useState(listData[0]);
// const [item1, setItem1] = useState(listData[1]);
// const [item2, setItem2] = useState(listData[2]);

// useEffect(() => {}, [item0, item1, item2]);

// const clickHandler = (event) => {
// const item = event.target.id;
// const { title, text, id, active } = listData[item];
// const res = { title, text, id, active: !active };
// switch (item) {
//   case `${item0.id}`:
//     setItem0(res);
//     console.log(`item ${item0.id} clicked`);
//     console.log(item0);
//     break;
//   case `${item1.id}`:
//     console.log(`item ${item1.id} clicked`);
//     setItem1(res);
//     console.log(item1);
//     break;
//   case `${item2.id}`:
//     console.log(`item ${item2.id} clicked`);
//     setItem2(res);
//     console.log(item2);
//     break;
//   default:
//     break;
// }
// };
