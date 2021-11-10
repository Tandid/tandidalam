import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

const Projects = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ProjectsHeading = (props) => {
    return (
      <div className="projects-heading">
        <div className="project-main-heading">
          <div className="heading-tab"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="project-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="project-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC project DATA FOR THE LABELS*/
  const projectTabs = [
    { label: "Project 1", logoSrc: "education.svg" },
    { label: "Project 2", logoSrc: "work-history.svg" },
    { label: "Project 3", logoSrc: "programming-skills.svg" },
  ];

  const projectDetails = [
    /* EDUCATION/LEADERSHIP */
    <div className="project-screen-container" key="education"></div>,

    /* WORK EXPERIENCE */
    <div className="project-screen-container" key="work-experience"></div>,

    /* Interests */
    <div className="project-screen-container" key="interests">
      <ProjectsHeading heading="Competitive Gaming" description="" />
      <ProjectsHeading heading="Basketball" description="" />
      <ProjectsHeading heading="Music" description="" />
      <ProjectsHeading heading="Weight Training" description="" />
      <ProjectsHeading heading="Cognitive Neuroscience" description="" />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedTabIndex(index);
  };

  const getTabs = () => {
    return projectTabs.map((tab, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={index === selectedTabIndex ? "tab selected-tab" : "tab"}
        key={index}
      >
        <img
          className="tab-logo"
          src={require(`../../assets/Resume/${tab.logoSrc}`).default}
          alt="B"
        />
        <span className="tab-label">{tab.label}</span>
      </div>
    ));
  };

  const getProjectScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {projectDetails.map((ProjectDetail) => ProjectDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="project-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="project-content">
        <ScreenHeading title={"Projects"} />
        <div className="project-card">
          <div className="project-tabs">
            <div className="tab-container">
              <div className="tab-icons"></div>
              <div className="tabs">{getTabs()}</div>
            </div>
          </div>

          <div className="project-tab-details">{getProjectScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
