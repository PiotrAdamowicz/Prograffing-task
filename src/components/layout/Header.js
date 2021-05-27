import React from "react";

import TruckImage from "../utils/ImgCompositionA";
import ArticleA from "../utils/ArticleA";

const data = {
  block: "header",
  title: "From One Location To Another",
  element: "article",
  text: "Transport can be divided into infrastructure, vehicles and operations. Infrastructure includes roads, railways.",
  unique: true,
  sectionName: "Transport",
};

export default function Header() {
  return (
    <section id="header" className="header">
      <ArticleA data={data} />
      <TruckImage block="header" />
    </section>
  );
}
