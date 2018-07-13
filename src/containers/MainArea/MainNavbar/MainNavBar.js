import React, { Component } from 'react';

// classes
import classes from './MainNavBar.css';

// images
import Plus from '../../../assets/images/Plus.svg';
import Search from '../../../assets/images/Search.svg';
import Notifications from '../../../assets/images/Notifications.svg';
import Person from '../../../assets/images/Person.svg';
import LogoKeepYourLink from '../../../assets/logo/LogoKeepYourLink.svg';

class MainNavBar extends Component {
  render() {
    return (
      <div className={classes.MainNavBar}>

        <div className={classes.SearchInput}>
          <div className={classes.Search}>
            <img src={Search} alt="Search"/>
          </div>
          <input type="text" />
        </div>

        <div className={classes.LogoKeepYourLink}>
          <img className={classes.LogoImage} src={LogoKeepYourLink} alt="LogoKeepYourLink" />
          <div className={classes.LogoText}>Keep Your Link</div>
        </div>

        <div className={classes.MainNavBarButtons}>
          <div className={classes.Plus}>
            <img src={Plus} alt="Plus"/>
          </div>
          <div className={classes.Notifications}>
            <img src={Notifications} alt="Notifications"/>
          </div>
          <div className={classes.Person}>
            <img src={Person} alt="Person"/>
          </div>
        </div>

      </div>
    );
  }
}

export default MainNavBar;