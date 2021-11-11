import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Contact.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="contact-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="contact-parent">
        <ScreenHeading title={"Connect with Me"} />
      </div>
      <div className="contactIconList">
        <a
          className="icons"
          href="https://www.linkedin.com/in/tandidalam/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa fa-linkedin-square"></i>
        </a>{" "}
        <a
          className="icons"
          href="https://github.com/Tandid"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa fa-github"></i>
        </a>
        <a className="icons" href="/" rel="noreferrer" target="_blank">
          <i className="fa fa-envelope"></i>
        </a>
        <a className="icons" href="/" rel="noreferrer" target="_blank">
          <i className="fa fa-angellist"></i>
        </a>
      </div>
    </div>
  );
}
