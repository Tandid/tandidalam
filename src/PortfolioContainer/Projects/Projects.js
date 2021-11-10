import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education/Leadership", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", imageURL: "" },
    { skill: "React JS", imageURL: "" },
    { skill: "React Native", imageURL: "" },
    { skill: "Express JS", imageURL: "" },
    { skill: "Node JS", imageURL: "" },
    { skill: "Mongo Db", imageURL: "" },
    { skill: "Core Java", imageURL: "" },
    { skill: "HTML", imageURL: "" },
    { skill: "CSS", imageURL: "" },
  ];

  const resumeDetails = [
    /* EDUCATION/LEADERSHIP */
    <div className="resume-screen-container" key="education">
      <div className="resume-section"> Education </div>
      <ResumeHeading
        heading={"Fullstack Academy"}
        subHeading={"Certificate, Software Engineering"}
        fromDate={"2020"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"CUNY Baruch College"}
        subHeading={"Bachelor of Business Administration (B.B.A), Accounting"}
        fromDate={"2015"}
        toDate={"2020"}
      />

      <div className="resume-section"> Leadership </div>
      <ResumeHeading
        heading={"Alpha Kappa Psi, Professional Business Fraternity"}
        subHeading={"Audit Director, Treasurer"}
        fromDate={"2017"}
        toDate={"2019"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Deloitte & Touche, LLC"}
          subHeading={"Senior Audit Assistant"}
          fromDate={"Sept. 2020"}
          toDate={"Sept. 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text"></span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Aulder Capital"}
          subHeading={"Real Estate Acquisitions Analyst Intern"}
          fromDate={"Oct. 2017"}
          toDate={"June 2018"}
        />
        <div className="experience-description">
          <span className="resume-description-text"></span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Maybank"}
          subHeading={"Accounting/Finance Intern"}
          fromDate={"June 2017"}
          toDate={"Sept 2017"}
        />
        <div className="experience-description">
          <span className="resume-description-text"></span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage"></div>
        </div>
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="Competitive Gaming" description="" />
      <ResumeHeading heading="Basketball" description="" />
      <ResumeHeading heading="Music" description="" />
      <ResumeHeading heading="Weight Training" description="" />
      <ResumeHeading heading="Cognitive Neuroscience" description="" />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
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
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
