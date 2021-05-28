import React from "react";

export default function Stat(props) {
  const { title, primary, secondary } = props.data;
  const { block } = props;
  return (
    <div className={`${block}__stat`}>
      <h2 className={`${block}__title`}>{title}</h2>
      <h4 className={`${block}__subtitle`}>{primary}</h4>
      <p className={`${block}__text`}>{secondary}</p>
    </div>
  );
}
