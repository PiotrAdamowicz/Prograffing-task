import React from "react";
import PartnerAvatar from "../../images/partner.png";
import ArticleA from "../utils/ArticleA";
import CardSizes from "../utils/CardSizes";
import ZigZagIcon from "../../svg/szlaczek 5.svg";

const data = {
  title: "Outstanding Pricing",
  element: "article",
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
      <div className="pricing__avatarContainer">
        <div className="pricing__avatarBg">
          <img
            className="pricing__avatar"
            src={PartnerAvatar}
            alt="business partner happy face"
          />
        </div>
        <div className="pricing__avatarText">
          <h4 className="pricing__partnerName">Chioke Okonkwo</h4>
          <p className="pricing__companyName">WhatInTheBox</p>
        </div>
      </div>
      <aside className="pricing__cost">
        <ArticleA data={data}>
          <button className="pricing__contactBtn">Contact Us</button>
        </ArticleA>
        <div className="pricing__cardContainer">
          <button className="pricing__cardLeft" />
          <button className="pricing__cardRight" />
          <img
            src={ZigZagIcon}
            alt="abstrat zig zag"
            className="pricing__cardZigZag"
          />
          <CardSizes />
        </div>
      </aside>
    </section>
  );
}
