import React from "react";
import ArticleB from "../utils/ArticleB";
import DeliveryManImage from "../utils/ImgCompositionC";
import Link from "../utils/Link";

const data = {
  block: "service",
  title: "Track Deliveries With Technology",
  element: "service__article",
  text1:
    "There is only one difference between transport and transportation, that is transport is for public.",
  text2:
    "There is only one difference between transport and transportation, that is transport is for public to move one place to another and transportation is moving anything like goods is used.",
};

export default function Service() {
  return (
    <section id="service" className="service">
      <ArticleB data={data} />
      <Link className="service__link">Learn More</Link>
      <DeliveryManImage />
    </section>
  );
}
