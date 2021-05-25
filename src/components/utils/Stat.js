import React from "react";

export default function Stat(props) {
  const { title, primary, secondary } = props.data;
  const { block } = props;
  return (
    <div className={`${block}__stat`}>
      <h2>{title}</h2>
      <h4>{primary}</h4>
      <p>{secondary}</p>
    </div>
  );
}
