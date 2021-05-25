import React from "react";

export default function Link(props) {
  const {
    className = "",
    href = "#",
    target = "",
    rel = "noopener noreferrer",
  } = props;
  return (
    <a className={className} href={href} target={target} rel={rel}>
      {props.children}
    </a>
  );
}
