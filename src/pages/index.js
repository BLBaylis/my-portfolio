import React from "react";
import IntroSection from "../components/introSection/IntroSection";
import Projects from "../components/projects/Projects";
import AboutMe from "..components/aboutMe/AboutMe";
import Contact from "..components/contact/Contact";
import styles from "./index.module.css";
import InfoSection from "../components/infoSection/InfoSection";
import jazz from "../static/images/jazz-pic.jpg";
import reactLogo from "../static/images/react-logo.svg";
import htmlLogo from "../static/images/html-logo.svg";
import cssLogo from "../static/images/css-logo.svg";
import javascriptLogo from "../static/images/javascript-logo.svg";
import webpackIcon from "../static/images/webpack-icon.svg";
import gatsbyLogo from "../static/images/gatsby-logo.svg";
import bootstrapLogo from "../static/images/bootstrap-logo.svg";
import jQueryLogo from "../static/images/jquery-logo.svg";
import twitchScreenShot from "../static/images/twitch.png";
import pomodoroScreenShot from "../static/images/pomodoro.png";
import ticTacToeScreenShot from "../static/images/tictactoe.png";
import calculatorScreenShot from "../static/images/calculator.png";
import portfolioScreenShot from "../static/images/portfolio.png";

const IndexPage = () => (
  <div className="outerDiv">
  	<IntroSection/>
  	<AboutMe/>
  	<Projects/>
    <Contact/>
  </div>
)

export default IndexPage;
