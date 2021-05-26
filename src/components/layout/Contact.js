import React from "react";
import ArrowIcon from "../../svg/lokalizacja.svg";
import PhoneIcon from "../../svg/telefon.svg";
import EnvelopeIcon from "../../svg/email.svg";
import MapPic from "../../images/mapka.png";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <aside className="contact__textContainer">
        <p className="constact__sectionName">Contact</p>
        <h2>Contact Us</h2>
        <h5 className="constact__text">
          Transport heavy products over long distances when speed is not an
          issue.
        </h5>
        <ul className="contact_list">
          <li className="contact__item">
            <img src={ArrowIcon} alt="arrow icon" />
            <h5>292 Thatcher St. Elyria, OH 44035</h5>
          </li>
          <li className="contact__item">
            <img src={PhoneIcon} alt="phone icon" />
            <h5>+1 (2345) 678-90-12</h5>
          </li>
          <li className="contact__item">
            <img src={EnvelopeIcon} alt="envelope icon" />
            <h5>info@transport.com</h5>
          </li>
        </ul>
      </aside>
      <img className="contact__map" src={MapPic} alt="lokalization map" />
    </section>
  );
}
