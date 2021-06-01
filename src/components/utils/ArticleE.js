import React from "react";

export default function ArticleE(props) {
  const { title, element, text1, text2, text3, block, id } = props.data;
  return (
    <article id={id} className={`${block}__${element}`}>
      <h4 className={`${block}__title`}>{title}</h4>
      <p className={`${block}__text`}>{text1}</p>
      <h5 className={`${block}__name`}>{text2}</h5>
      <p className={`${block}__text`}>{text3}</p>
      {props.children}
    </article>
  );
}
