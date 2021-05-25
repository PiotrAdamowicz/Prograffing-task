import React from "react";
import ShipImage from "../utils/ImgCompositionB";
import ArticleB from "../utils/ArticleB";
import Stat from "../utils/Stat";
import WorkflowStep from "../utils/WorkflowStep";
import Link from "../utils/Link";
import BtnGetStarted from "../utils/BtnGetStarted";

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
const workflowData = [
  {
    id: "1",
    title: "Order",
    text: "Carries the goods and passengers through airways by using.",
  },
  {
    id: "2",
    title: "Deliver",
    text: "Passengers through airways by using different aircraft like passenger.",
  },
  {
    id: "3",
    title: "Pick Up",
    text: "Different aircraft like passenger aircraft, cargo aircraft.",
  },
  {
    id: "4",
    title: "Be Happy",
    text: "This is the fastest mode of transport but it does not provide door to door.",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <ShipImage />
      <ArticleB data={data} />
      <BtnGetStarted />
      <h3 className="statistics__title">
        Communication, trade and other forms of exchange
      </h3>
      <aside className="statistics__data">
        {statistics.map((stat) => (
          <Stat block="statistics" key={stat.title} data={stat} />
        ))}
        <aside className="workflowSteps">
          {workflowData.map((data) => (
            <WorkflowStep key={data.id} block="workflowSteps" data={data} />
          ))}
        </aside>
        <div className="about__footer">
          <p>
            Want to know more?
            <span>
              <Link>Learn More</Link>
            </span>
          </p>
        </div>
      </aside>
    </section>
  );
}
