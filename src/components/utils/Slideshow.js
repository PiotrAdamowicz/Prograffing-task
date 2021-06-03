import React, { useState } from "react";

import arrow from "../../svg/arrowSlideshow.svg";
import Item from "./SlideItem";

export default function Slideshow(props) {
  const { block } = props;

  const items = [1, 2, 3, 4];

  return (
    <aside className={`${block}__slideshowContainer`}>
      <div className={`${block}__slideshow`}>
        {items.map((item, i) => (
          <Item block={block} key={i} id={i} />
        ))}
      </div>
      {/* <button onClick={prevItem} className={`${block}__slideLeft`}> */}
      {/* <img src={arrow} alt="arrow left icon" />
      </button> */}
      {/* <button onClick={nextItem} className={`${block}__slideRight`}>
        <img src={arrow} alt="arrow righ icon" />
      </button> */}
    </aside>
  );
}
