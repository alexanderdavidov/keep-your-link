import React, { Component } from 'react';
import classes from './ProfileMenu.css';
import PhotoButton from './PhotoButton';

class ProfileMenu extends Component {
  render() {

    const defaultCodeSnippet = (
      <div className={classes.MainWrapper}>

        <div className={classes.AvatarWrapper}>
          <div className={classes.Avatar}>
            <PhotoButton />
          </div>
        </div>

        <div className={classes.MainInformation}>

          <div className={classes.ItemWrapper}>
            <input className={classes.InputItem} type="text" placeholder="Enter email" autoFocus />
          </div>

          <div className={classes.ItemWrapper}>
            <input className={classes.InputItem} type="text" placeholder="Enter username" />
          </div>

          <div className={classes.ItemWrapper}>
            <input className={classes.InputItem} type="text" placeholder="Enter firstname" />
          </div>

          <div className={classes.ItemWrapper}>
            <input className={classes.InputItem} type="text" placeholder="Enter lastname" />
          </div>

        </div>

        <div className={classes.ButtonsWrapper}>
          <div className={classes.SaveButton}>SAVE</div>
          <div className={classes.SignOutButton} onClick={this.props.onClickSignOutButton}>SIGN OUT</div>
        </div>

      </div>
    );

    const signOutMenuSnippet = (
      <div className={classes.SignOutWrapper}>
        <div className={classes.Title}>Do you want to sign out?</div>
        <div className={classes.ButtonsWrapper}>
          <div className={classes.SignOutButton} onClick={this.props.onClickYes}>YES</div>
        </div>
      </div>
    );

    return (
      <div className={classes.ProfileMenu}>
        {!this.props.isSignOutButtonPressed ? defaultCodeSnippet : signOutMenuSnippet}
      </div>
    );
  }
}

export default ProfileMenu;