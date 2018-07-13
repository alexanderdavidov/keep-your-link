import React from 'react';

// classes
import classes from './WelcomePageContent.css';

// Animated
import { Animated } from "react-animated-css";


const welcomePageContent = () => {
  return (
    <div className={classes.WelcomePageContent}>

      <div className={classes.TextBlockOne}>
        <Animated animationIn="fadeInLeft" isVisible={true}>
          <h1>KeepYourLink lets you work with weblinks more organize and get more done</h1>
        </Animated>
      </div>

      <div className={classes.TextBlockTwo}>
        <Animated animationIn="fadeInUp" isVisible={true}>
          <h1>KeepYourLink lists, tags and containers for weblinks enable you to easy work with personal and business needs</h1>
        </Animated>
      </div>

      <div className={classes.Line}>
        <Animated animationIn="fadeInRight" isVisible={true}>
          <div className={classes.FigureOne}></div>
        </Animated>
      </div>

      <div className={classes.TextBlockThree}>
        <Animated animationIn="fadeInLeft" isVisible={true}>
          <h1>Support</h1>
          <h2><a href="/">facebook bot</a></h2>
          <h2><a href="/">support@keepyourlink.com</a></h2>
        </Animated>
      </div>

      <div className={classes.TextBlockFour}>
        <Animated animationIn="fadeInLeft" isVisible={true}>
          <h1>Contacts</h1>
          <h2><a href="/">David Sogomonyan</a></h2>
          <h2><a href="/https://www.facebook.com/alexanderutrobin11">Alexander Utrobin</a></h2>
        </Animated>
      </div>

    </div>
  );
};

export default welcomePageContent;