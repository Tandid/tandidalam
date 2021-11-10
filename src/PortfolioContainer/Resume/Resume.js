import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

const Resume = (props) => {
  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
      </div>
    </div>
  );
};

export default Resume;
