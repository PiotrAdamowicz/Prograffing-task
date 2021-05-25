import React from "react";
import PartnerAvatar from "../../images/partner.png";
import ArticleA from "../utils/ArticleA";
import CardSizes from "../utils/CardSizes";

const data = {
  title: "Outstanding Pricing",
  element: "pricing__article",
  text: "Air transportation also provides a communication or medical link, which is sometimes vital, between the different groups of people being served.",
  block: "pricing",
  sectionName: "How It Cost",
};

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <span className="pricing__quote">"</span>
      <h3 className="pricing__businessPartnerQuote">
        I just wanted to share a quick note and let you know that you guys do a
        really good job. I’m glad I decided to work with you. I never have any
        problem at all.
      </h3>
      <img
        className="pricing__avatar"
        src={PartnerAvatar}
        alt="business partner happy face"
      />
      <h4 className="pricing__partnerName">Chioke Okonkwo</h4>
      <p className="pricing__companyName">WhatInTheBox</p>
      <aside className="pricing__const">
        <ArticleA data={data} />
        <div className="pricing__cardContainer">
          <CardSizes />
        </div>
      </aside>
    </section>
  );
}
