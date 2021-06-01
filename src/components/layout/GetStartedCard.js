import React from "react";

export default function GetStartedCard(props) {
  const { block } = props;
  return (
    <aside className={`${block}__getStartedCard`}>
      <article className={`${block}__article`}>
        <p className={`${block}__sectionName`}>Transport</p>
        <h2 className={`${block}__title`}>Get Started</h2>
        <p className={`${block}__text`}>
          Least expensive and slowest mode of freight transport. It is generally
          used to transport heavy products.
        </p>
      </article>
      <button className={`${block}__getStartedBtn`}>
        <h6 className={`${block}__getStartedBtnText`}>Get Started</h6>
      </button>
    </aside>
  );
}
