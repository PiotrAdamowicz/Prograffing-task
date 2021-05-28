import React from "react";

export default function WorkflowStep(props) {
  const workflowData = [
    {
      id: "1",
      title: "Order",
      text: "Carries the goods and passengers through airways by using.",
    },
    {
      id: "2",
      title: "Deliver",
      text: "Passengers through airways by using different aircraft like passenger.",
    },
    {
      id: "3",
      title: "Pick Up",
      text: "Different aircraft like passenger aircraft, cargo aircraft.",
    },
    {
      id: "4",
      title: "Be Happy",
      text: "This is the fastest mode of transport but it does not provide door to door.",
    },
  ];
  const block = "workflow";

  return (
    <>
      <h2 className={`${block}__title`}>How We Work</h2>
      <p className={`${block}__text`}>
        Air transport carries the goods and passengers through airways by using
        different aircraft like passenger aircraft, cargo aircraft, helicopters
        etc.
      </p>
      <div className={`${block}__steps`}>
        {workflowData.map((step) => {
          const { id, title, text } = step;
          return (
            <div key={step.id} className={`${block}__step`}>
              <p className={`${block}__stepId`}>{id}</p>
              <p className={`${block}__title`}>{title}</p>
              <p className={`${block}__text`}>{text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
