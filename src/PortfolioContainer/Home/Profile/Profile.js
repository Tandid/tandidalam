import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text"> Tandid </span>{" "}
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Fullstack Developer",
                    1000,
                    "Passionate Coder",
                    1000,
                    "Curious Learner",
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline"></span>
          </div>
          <div className="profile-options">
            <a
              href="https://www.linkedin.com/in/tandidalam/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="btn primary-btn"> Connect </button>
            </a>
            <a href="resume.pdf" download="resume.pdf">
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
