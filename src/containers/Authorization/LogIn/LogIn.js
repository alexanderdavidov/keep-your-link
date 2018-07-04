import React, { Component } from 'react';

// styles
import classes from '../Authorization.css';

// pictures
import LogoKeepYourLink from '../../../assets/logo/LogoKeepYourLink.svg';
import LogoGoogle from '../../../assets/images/g-logo.png';
import LogoFacebook from '../../../assets/images/facebook.png';

class LogIn extends Component {
  render() {
    return (
      <div className={classes.Authorization}>
        <div className={classes.Logo}>
          <img className={classes.LogoImage} src={LogoKeepYourLink} alt="LogoKeepYourLink" />
          <div className={classes.LogoText}>Keep Your Link</div>
        </div>
        <div className={classes.AuthorizationForm}>
          <h1>Log In to KeepYourLink</h1>
          <p>or <a href="/">create an account</a></p>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" />
            <button>Log In</button>
            <div className={classes.Google}>
              <img style={{display: 'block', width: '25px', marginRight: '10px'}} src={LogoGoogle} alt="LogoGoogle" />
              <div>Log In with Google</div>
            </div>
            <div className={classes.Facebook}>
              <img style={{display: 'block', width: '25px', marginRight: '10px'}} src={LogoFacebook} alt="LogoFacebook" />
              <div>Log In with Facebook</div>
            </div>
          </form>
          <p><a href="/">Forgot your password?</a></p>
        </div>
      </div>
    );
  }
}

export default LogIn;