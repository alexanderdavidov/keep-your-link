import React from 'react';

import NavItem from './NavItem/NavItem';

// styles
import classes from './NavBar.css';

// pictures
import LogoKeepYourLink from '../../../assets/logo/LogoKeepYourLink.svg';

const navBar = () => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.Logo}>
        <img className={classes.LogoImage} src={LogoKeepYourLink} alt="LogoKeepYourLink" />
        <div className={classes.LogoText}>Keep Your Link</div>
      </div>
      <ul className={classes.NavLinkItems}>
        <NavItem link="/login" className={classes.NavLinkLogIn}>LOG IN</NavItem>
        <NavItem link="/login" className={classes.NavLinkSignUp}>SIGN UP</NavItem>
      </ul>
    </div>
  );
};

export default navBar;