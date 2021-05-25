import React from "react";

export default function ArticleB(props) {
  const { title, element, text1, text2, block } = props.data;
  return (
    <article className={`${block}__${element}`}>
      <p className="sectionName">{block}</p>
      <h2 className="title">{title}</h2>
      <h5>{text1}</h5>
      <p className="text">{text2}</p>
      <button>Get Started</button>
    </article>
  );
}
