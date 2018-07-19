import React, { Component } from 'react';
import classes from './ProfileMenu.css';
import Avatar from '../../../../assets/images/Avatar.svg';

class ProfileMenu extends Component {
  render() {
    return (
      <div className={classes.ProfileMenu}>
        <div className={classes.MainWrapper}>

          <div className={classes.AvatarWrapper}>
            <img className={classes.Avatar} src={Avatar} alt="Avatar" />
          </div>

          <div className={classes.MainInformation}>

            <div className={classes.ItemWrapper}>
              <input className={classes.InputItem} type="text" placeholder="Enter email" />
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

          <div className={classes.SaveButton}>SAVE</div>

        </div>
      </div>
    );
  }
}

export default ProfileMenu;