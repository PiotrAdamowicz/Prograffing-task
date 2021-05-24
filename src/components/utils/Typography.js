import React from "react";

export default function Typography(props) {
  const { color, background } = props;
  return (
    <section
      style={{
        color,
        background,
      }}
    >
      <h1>Typography</h1>
      <h2>Text h2</h2>
      <h3>Text h3</h3>
      <h4>Text h4</h4>
      <h5>Text h5</h5>
      <p>Text paragraph</p>
    </section>
  );
}
