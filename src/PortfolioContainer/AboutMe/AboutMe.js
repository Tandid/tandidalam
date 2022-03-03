import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService.js";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Full stack developer with extensive background knowledge and skills in a wide variety of industries as well as the building process for web applications using the MERN stack. As long as there's coffee right alongside me, I'm ready to tackle any coding challenge that life throws at me!",
    highlights: {
      heading: "My Career",
    },
    career:
      "I’ve always had a passion for learning and my curiosity always took me down a road where I was able to develop new skills and go out of my comfort zone. In my time at Baruch College, I’ve experienced being a barista, working in real estate and public accounting, and I took on diverse roles in school clubs like helping out in marketing, treasury or leading social events, but at a certain point I reached a standstill. I felt my growth being limited and that’s when a friend told me to try out a coding bootcamp right before I was about to graduate. That led me to Fullstack Academy where I finally realized my true calling, and now here I am and I couldn’t be any more sure of my career! ",
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              <span className="about-me-description">
                {SCREEN_CONSTANTS.career}
              </span>
            </div>
            <div className="about-me-options">
              <a
                href="https://www.linkedin.com/in/tandidalam/"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  className="btn primary-btn"
                  onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                >
                  {" "}
                  Connect{" "}
                </button>
              </a>

              <a href=".resume.pdf" download="resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
