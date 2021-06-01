import React from "react";

export default function ArticleA(props) {
  const {
    title,
    element,
    text,
    block,
    unique = false,
    sectionName = "",
  } = props.data;
  return (
    <article className={`${block}__${element}`}>
      <p className={`${block}__sectionName`}>{sectionName}</p>
      {unique ? (
        <h1 className={`${block}__title`}>{title}</h1>
      ) : (
        <h2 className={`${block}__title`}>{title}</h2>
      )}
      <p className={`${block}__text`}>{text}</p>
      {props.children}
    </article>
  );
}
