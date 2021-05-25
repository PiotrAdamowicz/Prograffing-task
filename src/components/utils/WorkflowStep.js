import React from "react";

export default function WorkflowStep(props) {
  const { id, title, text } = props.data;
  const { block } = props;
  return (
    <div className={`${block}__step`}>
      <p className={`${block}__stepId`}>{id}</p>
      <p className={`${block}__title`}>{title}</p>
      <p className={`${block}__text`}>{text}</p>
    </div>
  );
}
