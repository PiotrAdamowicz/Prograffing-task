import React from "react";
import ShipImage from "../utils/ImgCompositionB";
import ArticleB from "../utils/ArticleB";
import Stat from "../utils/Stat";
import WorkflowStep from "../utils/WorkflowStep";
import Link from "../utils/Link";

const data = {
  block: "about",
  title: "Connect Via One Platform",
  element: "article",
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
      <article className="about__shipArticle">
        <ShipImage block="about" />
        <ArticleB data={data}>
          <button className="about__getStartedBtn">Get Started</button>
        </ArticleB>
      </article>
      <h3 className="statistics__title">
        Communication, trade and other forms of exchange
      </h3>
      <aside className="statistics__data">
        {statistics.map((stat) => (
          <Stat block="statistics" key={stat.title} data={stat} />
        ))}
      </aside>

      <aside className="workflow">
        <WorkflowStep />
      </aside>
      <div className="about__footer">
        <p className="about__text1">Want to know more?</p>
        <span>
          <Link className="about__footerLink">Learn More</Link>
        </span>
      </div>
    </section>
  );
}
