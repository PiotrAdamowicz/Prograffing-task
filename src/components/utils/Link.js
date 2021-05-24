import React from "react";

export default function Link(props) {
  const { className = "", href = "#", target = "", rel = "" } = props;
  return (
    <a
      className={className}
      href={href} //web address
      target={target} //"_blank"
      rel={rel} //"noopener noreferrer"
    >
      {props.children}
    </a>
  );
}
