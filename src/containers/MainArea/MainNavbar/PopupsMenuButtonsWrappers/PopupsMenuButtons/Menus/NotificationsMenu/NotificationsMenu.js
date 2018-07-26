import React, { Component } from 'react';
import classes from './NotificationsMenu.css';


class NotificationsMenu extends Component {
  render() {
    return (
      <div className={classes.NotificationsMenu}>
        <div className={classes.MainWrapper}>

          <div className={classes.DefaultLists}>
            <div className={classes.ListTitle}>Incoming weblinks</div>
            <div className={classes.ListTitle}>Weblinks from users</div>
          </div>

          <div className={classes.PublicLists}>
            <div className={classes.ListTitle}>New List Two</div>
            <div className={classes.ListTitle}>New List Three</div>
          </div>

          <div className={classes.ClearButtonWrapper}>
            <div className={classes.ClearButton}>Clear</div>
          </div>

        </div>
      </div>
    );
  }
}

export default NotificationsMenu;