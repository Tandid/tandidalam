import React, { PureComponent } from "react";
import "./Footer.css";

export default class Footer extends PureComponent {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-parent">
          <img
            src={require("../../../assets/Home/shape-bg.png").default}
            alt="no internet connection"
          />
        </div>
      </div>
    );
  }
}
