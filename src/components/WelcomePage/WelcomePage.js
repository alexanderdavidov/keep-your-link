import React from 'react';

//classes
import classes from './WelcomePage.css';

// Animated
import { Animated } from "react-animated-css";

// component
import NavBar from './Navbar/NavBar';
import WelcomePageContent from './WelcomePageContent/WelcomePageContent';


const welcomePage = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.NavBar}>
        <div className={classes.WrapperFixed}>
          <Animated animationIn="fadeInDown" isVisible={true}>
            <NavBar />
          </Animated>
        </div>
      </div>
      <div className={classes.WelcomePageContent}>
        <WelcomePageContent />
      </div>
      <div className={classes.Footer}>
        <Animated animationIn="fadeInUp" isVisible={true}>
          <h3>&copy; Keep Your Link</h3>
        </Animated>
      </div>
    </div>
  );
};

export default welcomePage;