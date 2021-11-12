import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Flippy, { FrontSide, BackSide } from "react-flippy";
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

        {/* Project 1 */}
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal"
        >
          <FrontSide className="project-front-card">
            <img
              className="project-img"
              src={require("../../assets/Projects/poptoons.gif").default}
              alt="no results"
            />
            <div className="overlay overlayBottom">
              <div className="overlay-content">
                <a
                  className="live-demo-button"
                  href="https://poptoons-shop.herokuapp.com/ "
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="github-button"
                  href="https://github.com/Tandid/Poptoons-Shop"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github"></i>
                  Github
                </a>
              </div>
            </div>
          </FrontSide>
          <BackSide className="project-back-card">
            <div className="project-name"> Pop Toons Shop </div>
            <div className="project-description">
              Poptoons Shop is an E-commerce site that sells pop vinyl figurines
              also known as Funko Pops. This E-commerce site offers a wide
              selection of Funko Pops from popular films, videogames, sitcoms,
              and anime series. In the site users are able to purchase products,
              go through a checkout system, view their order history, and if
              they have admin access, they're able to add/edit products, orders,
              and user data.
            </div>
            <div className="project-tech-stack">
              <div className="tech-stack-title">Implemented Technologies</div>
              <div className="project-description">
                FrontEnd: Javascript, HTML, Pug, CSS, Bootstrap
              </div>
              <div className="project-description">
                BackEnd: Javascript, JQuery, NodeJS, MongoDB, Heroku, Socket.io
              </div>
            </div>
          </BackSide>
        </Flippy>

        {/* Project 2 */}
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal"
        >
          <FrontSide className="project-front-card">
            <img
              className="project-img"
              src={require("../../assets/Projects/quacker.gif").default}
              alt="no results"
            />
            <div className="overlay overlayBottom">
              <div className="overlay-content">
                <a
                  className="live-demo-button"
                  href="https://quacker-twitterclone.herokuapp.com/ "
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="github-button"
                  href="https://github.com/Tandid/Quacker-TwitterClone"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github"></i>
                  Github
                </a>
              </div>
            </div>
          </FrontSide>
          <BackSide className="project-back-card">
            <div className="project-name"> Quacker </div>
            <div className="project-description">
              Quacker is a social media app that mimics Twitter's layouts and
              features. Users can check out the latest news, follow others, and
              chat with eachother real time!
            </div>
            <div className="project-tech-stack">
              <div className="tech-stack-title">Implemented Technologies</div>
              <div className="project-description">
                FrontEnd: Javascript, HTML, Pug, CSS, Bootstrap
              </div>
              <div className="project-description">
                BackEnd: Javascript, JQuery, NodeJS, MongoDB, Heroku, Socket.io
              </div>
            </div>
          </BackSide>
        </Flippy>

        {/* Project 3 */}
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal"
        >
          <FrontSide className="project-front-card">
            <img
              className="project-img"
              src={require("../../assets/Projects/spotify.gif").default}
              alt="no results"
            />
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
          </FrontSide>
          <BackSide className="project-back-card">
            <div className="project-name"> Quacker </div>
            <div className="project-description">
              Quacker is a social media app that mimics Twitter's layouts and
              features. Users can check out the latest news, follow others, and
              chat with eachother real time!
            </div>
            <div className="project-tech-stack">
              <div className="tech-stack-title">Implemented Technologies</div>
              <div className="project-description">
                FrontEnd: Javascript, HTML, Pug, CSS, Bootstrap
              </div>
              <div className="project-description">
                BackEnd: Javascript, JQuery, NodeJS, MongoDB, Heroku, Socket.io
              </div>
            </div>
          </BackSide>
        </Flippy>
      </div>
    </div>
  );
}
