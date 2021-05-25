import React from "react";
import ShipImage from "./utils/ShipImgComposition";
import ArticleB from "./utils/ArticleB";
import Stat from "./utils/Stat";

const data = {
  block: "about",
  title: "Connect Via One Platform",
  element: "about__article",
  text1:
    "Transport can be divided into infrastructure, vehicles and operations. Infrastructure includes roads.",
  text2:
    "Transport is a system for taking people or goods from one place to another, for example using buses or trains. The extra money could be spent on improving public transport.",
};
const statistics = [
  {
    title: "42+",
    primary: "Happy Clients",
    secondary: "Consectetur      ",
  },
  {
    title: "73%",
    primary: "Successful Rate",
    secondary: "Adipiscing",
  },
  {
    title: "5.00",
    primary: "Average Rating",
    secondary: "Eiusmod Tempor",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <ShipImage />
      <ArticleB data={data} />
      <h3 className="statistics__title">
        Communication, trade and other forms of exchange
      </h3>
      <aside className="statistics__data">
        {statistics.map((stat) => (
          <Stat key={stat.title} data={stat} />
        ))}
      </aside>
    </section>
  );
}
