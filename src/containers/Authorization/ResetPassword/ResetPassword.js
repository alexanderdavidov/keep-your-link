import React, { Component } from 'react';

// styles
import classes from '../Authorization.css';

// pictures
import LogoKeepYourLink from '../../../assets/logo/LogoKeepYourLink.svg';

class ResetPassword extends Component {
  render() {
    return (
      <div className={classes.Authorization}>
        <div className={classes.Logo}>
          <img className={classes.LogoImage} src={LogoKeepYourLink} alt="LogoKeepYourLink" />
          <div className={classes.LogoText}>Keep Your Link</div>
        </div>
        <div className={classes.AuthorizationForm}>
          <h1>Reset Your Password</h1>
          <p>Submit your email address and we’ll send you a link to reset your password</p>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ResetPassword;