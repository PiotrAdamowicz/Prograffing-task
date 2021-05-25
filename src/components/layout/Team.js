import React from "react";
import ArticleE from "../utils/ArticleE";
import ManagerPic from "../../images/kierowca.png";

const data = {
  block: "slider",
  title:
    "Now it’s almost like having a customer right here with me. I just choose the package and click save. It’s so simple.",
  element: "slider__article",
  text1:
    "Cargo by aircraft such as airplanes and helicopters. Air transportation has become the primary means of common-carrier traveling. Air transportation also provides a communication or medical link, which is sometimes vital, between the different groups.",
  text2: "Peter Taylor",
  text3: "Manager",
};

export default function Team() {
  return (
    <section id="team" className="team">
      <p className="team__sectionName">Our Team</p>
      <h2 className="team__title">Focusing On Packaging</h2>
      <p className="team__text">
        The movement of passengers and cargo by aircraft such as airplanes and
        helicopters. Air transportation has become the primary.
      </p>
      <aside className="team__slider">
        <img className="slider__person" src={ManagerPic} alt="person" />
        <ArticleE data={data} />
        <button className="slider__left">Left</button>
        <button className="slider__right">Right</button>
      </aside>
    </section>
  );
}
