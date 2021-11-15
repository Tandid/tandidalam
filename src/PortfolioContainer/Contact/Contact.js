import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService.js";
import Animations from "../../utilities/Animations";
import "./Contact.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
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
          className="icons linkedin"
          href="https://www.linkedin.com/in/tandidalam/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa fa-linkedin-square"></i>
          <span> linkedin.com/in/tandidalam/ </span>
        </a>
        <a
          className="icons github"
          href="https://github.com/Tandid"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa fa-github"></i>
          <span> github.com/Tandid </span>
        </a>
        <a className="icons gmail" href="/" rel="noreferrer" target="_blank">
          <i className="fa fa-envelope"></i>
          <span> tandid.alam@gmail.com </span>
        </a>
        {/* <a
          className="icons angellist"
          href="/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa fa-angellist"></i>
        </a> */}
      </div>
    </div>
  );
}
