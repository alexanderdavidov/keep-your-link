import React, { Component } from 'react';

// styles
import classes from '../Authorization.css';

// pictures
import LogoKeepYourLink from '../../../assets/logo/LogoKeepYourLink.svg';
import LogoGoogle from '../../../assets/images/g-logo.png';
import LogoFacebook from '../../../assets/images/facebook.png';

class SignUp extends Component {
  render() {
    return (
      <div className={classes.Authorization}>
        <div className={classes.Logo}>
          <img className={classes.LogoImage} src={LogoKeepYourLink} alt="LogoKeepYourLink" />
          <div className={classes.LogoText}>Keep Your Link</div>
        </div>
        <div className={classes.AuthorizationForm}>
          <h1>Create a KeepYourLink Account</h1>
          <p>or <a href="/">log in to your account</a></p>
          <form>
            <label htmlFor="username">Your Username</label>
            <input type="text" name="username" id="username" placeholder="Enter username without spaces, minimum 4 symbols" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter password minimum 8 symbols" />
            <button>Create new account</button>
            <div className={classes.Google}>
              <img style={{display: 'block', width: '25px', marginRight: '10px'}} src={LogoGoogle} alt="LogoGoogle" />
              <div>Sign Up with Google</div>
            </div>
            <div className={classes.Facebook}>
              <img style={{display: 'block', width: '25px', marginRight: '10px'}} src={LogoFacebook} alt="LogoFacebook" />
              <div>Sign Up with Facebook</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;