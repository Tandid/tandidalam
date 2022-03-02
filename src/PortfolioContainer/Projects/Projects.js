import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService.js";
import Animations from "../../utilities/Animations";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./Projects.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
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
            <div className="project-name"> Pop Toons Shop (E-Commerce App)</div>
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
              <div className="tech-stack-title">
                Implemented Technologies/Software
              </div>
              <div className="project-description">
                FrontEnd: React, Redux, Javascript, HTML5, Material UI
              </div>
              <div className="project-description">
                BackEnd: Javascript, PostgreSQL, NodeJS, Express, Heroku, Stripe
                API
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
                  href="https://buzzer-twitterclone.herokuapp.com/ "
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="github-button"
                  href="https://github.com/Tandid/Buzzer"
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
            <div className="project-name"> Buzzer (Twitter Clone) </div>
            <div className="project-description">
              Buzzer is a social media app that mimics Twitter's overall layout
              and features. Users can create their own posts, follow other
              users, and interact with eachother's post through likes, comments,
              and reposts. On top of that, users receive live notifications and
              can chat with eachother or groups in real-time!
            </div>
            <div className="project-tech-stack">
              <div className="tech-stack-title">
                Implemented Technologies/Software
              </div>
              <div className="project-description">
                FrontEnd: Javascript, JQuery, HTML5, Pug, CSS, Bootstrap
              </div>
              <div className="project-description">
                BackEnd: Javascript, JQuery, NodeJS, Express, MongoDB, Heroku,
                Socket.io, News API
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
                  href="https://the-hooded-hero.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="github-button"
                  href="https://github.com/Tandid/The-Hooded-Hero"
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
            <div className="project-name"> The Hooded Hero (2D Platformer)</div>
            <div className="project-description">
              The Hooded Hero is a 2D Platformer game made using the Phaser.js
              library.The game offers users to go through a story mode with
              three levels, where players fight their way through enemies,
              collect coins, and come across a final boss at the end. On top of
              that, there's a multiplayer mode where players get to face off
              with eachother in order to see who can complete the level the
              fastest!
            </div>
            <div className="project-tech-stack">
              <div className="tech-stack-title">
                Implemented Technologies/Software
              </div>
              <div className="project-description">
                FrontEnd: Javascript, Tiled, HTML5, CSS
              </div>
              <div className="project-description">
                BackEnd: Javascript, Phaser.js, NodeJS, Express, Heroku,
                Socket.io, Webpack
              </div>
            </div>
          </BackSide>
        </Flippy>
      </div>
    </div>
  );
}
