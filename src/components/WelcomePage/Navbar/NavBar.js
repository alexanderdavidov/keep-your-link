import React from 'react';

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
      <div className={classes.NavLinkItems}>
        {/*<div className={classes.NavLinkItem}>*/}
          {/*Support*/}
        {/*</div>*/}
        {/*<div className={classes.NavLinkItem}>*/}
          {/*About us*/}
        {/*</div>*/}
        <div className={classes.NavLinkLogIn}>
          LOG IN
        </div>
        <div className={classes.NavLinkSignUp}>
          SIGN UP
        </div>
      </div>
    </div>
  );
};

export default navBar;