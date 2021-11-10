import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="project-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="project-parent">
        <ScreenHeading title={"Projects"} />
        <div className="project-card">
          <div className="project-1"></div>
          <div className="overlay overlayBottom">
            <div className="overlay-content">
              <a
                className="live-demo-button"
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
              <a
                className="github-button"
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-github"></i>
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-2"></div>
          <div className="overlay overlayBottom">
            <div className="overlay-content">
              <a
                className="live-demo-button"
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
              <a
                className="github-button"
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-github"></i>
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-3"></div>
          <div className="overlay overlayBottom">
            <div className="overlay-content">
              <a
                className="live-demo-button"
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
              <a
                className="github-button"
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-github"></i>
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
