import React from "react";
import ArticleB from "../utils/ArticleB";
import DeliveryManImage from "../utils/ImgCompositionC";
import Link from "../utils/Link";
import GetStartedCard from "./GetStartedCard";

const data = {
  block: "service",
  title: "Track Deliveries With Technology",
  element: "article",
  text1:
    "There is only one difference between transport and transportation, that is transport is for public.",
  text2:
    "There is only one difference between transport and transportation, that is transport is for public to move one place to another and transportation is moving anything like goods is used.",
};

export default function Service() {
  return (
    <>
      <section id="service" className="service">
        <ArticleB data={data}>
          <Link className="service__link">Learn More</Link>
        </ArticleB>
        <DeliveryManImage block="service" />
      </section>
      <GetStartedCard block="service" />
    </>
  );
}
