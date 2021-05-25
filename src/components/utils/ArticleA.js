import React from "react";

export default function ArticleA(props) {
  const { title, element, text, block } = props.data;
  return (
    <article className={`${block}__${element}`}>
      <p className="sectionName">{block}</p>
      <h1 className="title">{title}</h1>
      <p className="text">{text}</p>
      <button>Get Started</button>
    </article>
  );
}
