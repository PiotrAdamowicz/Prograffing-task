import React from "react";
import Logo1Pic from "../../images/logo 1.png";
import Logo2Pic from "../../images/logo 2.png";
import Logo3Pic from "../../images/logo 3.png";
import Logo4Pic from "../../images/logo 4.png";
import Carousel from "react-bootstrap/Carousel";

import arrow from "../../svg/arrowSlideshow.svg";

export default function Slideshow(props) {
  const { block } = props;

  return (
    <>
      <div className={`${block}__slideshowContainer`}></div>
      <Carousel controls={false}>
        <Carousel.Item>
          <div className={`${block}__slideshow`}>
            <img
              className={`${block}__slidePic`}
              src={Logo1Pic}
              alt="company logo"
            />
            <img
              className={`${block}__slidePic`}
              src={Logo2Pic}
              alt="company logo"
            />
            <img
              className={`${block}__slidePic`}
              src={Logo3Pic}
              alt="company logo"
            />
            <img
              className={`${block}__slidePic`}
              src={Logo4Pic}
              alt="company logo"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={`${block}__slideshow`}>
            <img
              className={`${block}__slidePic`}
              src={Logo1Pic}
              alt="company logo"
            />
            <img
              className={`${block}__slidePic`}
              src={Logo2Pic}
              alt="company logo"
            />
            <img
              className={`${block}__slidePic`}
              src={Logo3Pic}
              alt="company logo"
            />
            <img
              className={`${block}__slidePic`}
              src={Logo4Pic}
              alt="company logo"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
