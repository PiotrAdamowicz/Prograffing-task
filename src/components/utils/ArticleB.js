import React from "react";

export default function ArticleB(props) {
  const { title, element, text1, text2, block } = props.data;
  return (
    <article className={`${block}__${element}`}>
      <p className={`${block}__sectionName`}>{block}</p>
      <h2 className={`${block}__title`}>{title}</h2>
      <h5>{text1}</h5>
      <p className={`${block}__text`}>{text2}</p>
    </article>
  );
}
