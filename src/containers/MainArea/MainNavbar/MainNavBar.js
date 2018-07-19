import React, {Component} from 'react';
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent';
import Popup from "reactjs-popup";

// MenuButtons
import PlusMenu from './PlusMenu/PlusMenu';
import ProfileMenu from './ProfileMenu/ProfileMenu';

// classes
import classes from './MainNavBar.css';

// images
import Plus from '../../../assets/images/Plus.svg';
import Search from '../../../assets/images/Search.svg';
import Notifications from '../../../assets/images/Notifications.svg';
import Person from '../../../assets/images/Person.svg';
import LogoKeepYourLink from '../../../assets/logo/LogoKeepYourLink.svg';
import ListBurger from '../../../assets/images/mainAreaImages/ListBurger.svg';

class MainNavBar extends Component {
  render() {
    return (
      <UserAgentProvider ua={window.navigator.userAgent}>
        <div className={classes.MainNavBar}>

          {/* Desktop !*/}
          <UserAgent computer>
            <div className={classes.SearchInput}>
              <div className={classes.Search}>
                <img src={Search} alt="Search"/>
              </div>
              <input type="text"/>
            </div>
            <div className={classes.LogoKeepYourLinkWrapper}>
              <div className={classes.LogoKeepYourLink}>
                <img className={classes.LogoImage} src={LogoKeepYourLink} alt="LogoKeepYourLink"/>
                <div className={classes.LogoText}>Keep Your Link</div>
              </div>
            </div>
            <div className={classes.MainNavBarButtons}>

              <Popup
                trigger={<div className={classes.Plus}><img src={Plus} alt="Plus"/></div>}
                position="bottom right"
                on="click"
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  padding: "0px",
                  border: "none",
                  width: '500px',
                  height: '60px',
                  boxShadow: '1px 1px 3px rgba(83, 83, 83, 0.5)',
                  borderRadius: '5px'}}
                arrow={false}>
                <PlusMenu />
              </Popup>

              <Popup
                trigger={<div className={classes.Notifications}><img src={Notifications} alt="Notifications"/></div>}
                position="bottom right"
                on="click"
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  padding: "0px",
                  border: "none",
                  width: '500px',
                  height: '60px',
                  boxShadow: '1px 1px 3px rgba(83, 83, 83, 0.5)',
                  borderRadius: '5px'}}
                arrow={false}>
                <PlusMenu />
              </Popup>

              <Popup
                trigger={<div className={classes.Person}><img src={Person} alt="Person"/></div>}
                position="bottom right"
                on="click"
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  padding: "0px",
                  border: "none",
                  width: '300px',
                  height: '400px',
                  boxShadow: '1px 1px 3px rgba(83, 83, 83, 0.5)',
                  borderRadius: '5px'}}
                arrow={false}>
                <ProfileMenu />
              </Popup>

            </div>
          </UserAgent>

          {/* Mobile !*/}
          <UserAgent mobile>
            <div onClick={this.props.onBurgerButtonClick} className={classes.BurgerButton}>
              <img src={ListBurger}
                   alt="ListBurger"/>
            </div>
            <div className={classes.LogoKeepYourLinkWrapper}>
              <div className={classes.LogoKeepYourLink}>
                <img className={classes.LogoImage} src={LogoKeepYourLink} alt="LogoKeepYourLink"/>
              </div>
            </div>
            <div style={{right: '15px'}} className={classes.MainNavBarButtons}>
              <div className={classes.Notifications}>
                <img src={Notifications} alt="Notifications"/>
              </div>
              <div className={classes.Plus}>
                <img src={Plus} alt="Plus"/>
              </div>
            </div>
          </UserAgent>

        </div>

      </UserAgentProvider>

    );
  }
}

export default MainNavBar;