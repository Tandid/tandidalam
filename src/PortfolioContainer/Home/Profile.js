import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a
              href="https://www.linkedin.com/in/tandidalam/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a
              href="https://github.com/Tandid"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-github-square"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text"> Tandid </span>{" "}
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev",
                    1000,
                    "Fullstack Developer",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
