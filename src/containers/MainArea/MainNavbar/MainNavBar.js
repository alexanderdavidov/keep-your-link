import React, {Component} from 'react';
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent'
import Popup from "reactjs-popup";
import onClickOutside from "react-onclickoutside";

// Menu
import PlusMenu from './PlusMenu/PlusMenu';
import ProfileMenu from './ProfileMenu/ProfileMenu';

// classes
import classes from './MainNavBar.css';

// images
import Search from '../../../assets/images/Search.svg';
import LogoKeepYourLink from '../../../assets/logo/LogoKeepYourLink.svg';
import ListBurger from '../../../assets/images/mainAreaImages/ListBurger.svg';

// buttons
import ButtonPlus from './Buttons/ButtonPlus/ButtonPlus';
import ButtonNotifications from './Buttons/ButtonNotifications/ButtonNotifications';
import ButtonProfile from './Buttons/ButtonProfile/ButtonProfile';

class MainNavBar extends Component {
  state = {
    searchInputActive: false,
    isPlusMenuOpen: false,
    isNotificationsMenuOpen: false,
    isProfileMenuOpen: false,
    isActivePlusMenu: false,
    isActiveNotificationsMenu: false,
    isActiveProfileMenu: false,
    value: ''
  }

  onSearchInputClick = () => {
    this.setState({searchInputActive: true});
  }
  onSearchInputLeave = () => {
    this.setState({searchInputActive: false});
  }

  handleClickOutside = (evt) => {
    this.setState({
      isActivePlusMenu: false,
      isActiveNotificationsMenu: false,
      isActiveProfileMenu: false,
      isPlusMenuOpen: false,
      isNotificationsMenuOpen: false,
      isProfileMenuOpen: false,
    });
  }

  onClickPlusMenuHandler = () => {
    this.setState({
      isPlusMenuOpen: !this.state.isPlusMenuOpen,
      isNotificationsMenuOpen: false,
      isProfileMenuOpen: false,
      isActivePlusMenu: !this.state.isActivePlusMenu,
      isActiveNotificationsMenu: false,
      isActiveProfileMenu: false
    });
  }

  onClickNotificationsMenuHandler = () => {
    this.setState({
      isNotificationsMenuOpen: !this.state.isNotificationsMenuOpen,
      isPlusMenuOpen: false,
      isProfileMenuOpen: false,
      isActiveNotificationsMenu: !this.state.isActiveNotificationsMenu,
      isActivePlusMenu: false,
      isActiveProfileMenu: false
    });
  }

  onClickProfileMenuHandler = () => {
    this.setState({
      isProfileMenuOpen: !this.state.isProfileMenuOpen,
      isPlusMenuOpen: false,
      isNotificationsMenuOpen: false,
      isActiveProfileMenu: !this.state.isActiveProfileMenu,
      isActivePlusMenu: false,
      isActiveNotificationsMenu: false,
    });
  }

  onChangeValueHandler = (e) => {
    this.setState({value: e.target.value});
  }

  onClickSearchImageHandler = () => {
    document.getElementById("searchInput").focus();
  }

  render() {
    console.log(this.state.value);
    let inputOpacityStyle;
    if (this.state.searchInputActive) {
      inputOpacityStyle = {opacity: '1'};
    }
    return (
      <UserAgentProvider ua={window.navigator.userAgent}>
        <div className={classes.MainNavBar}>
          {/* Desktop !*/}
          <UserAgent computer>
            <div className={classes.SearchInput} onClick={this.onSearchInputClick} style={inputOpacityStyle}
                 onMouseLeave={this.onSearchInputLeave}>
              <img onClick={this.onClickSearchImageHandler} src={Search} alt="Search" />
              <form action="" autoComplete="off">
                <input id="searchInput" type="text" onChange={this.onChangeValueHandler} value={this.state.value} />
              </form>
            </div>
            <div className={classes.LogoKeepYourLinkWrapper}>
              <div className={classes.LogoKeepYourLink}>
                <img className={classes.LogoImage} src={LogoKeepYourLink} alt="LogoKeepYourLink"/>
                <div className={classes.LogoText}>Keep Your Link</div>
              </div>
            </div>
            <div className={classes.MainNavBarButtons}>
              <Popup
                className={classes.classList}
                trigger={<ButtonPlus onClickHandler={this.onClickPlusMenuHandler} isActive={this.state.isActivePlusMenu} />}
                position="bottom right"
                open={this.state.isPlusMenuOpen}
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
                  borderRadius: '5px'
                }}
                offsetY={10}
                arrow={false}>
                <PlusMenu/>
              </Popup>

              <Popup
                trigger={<ButtonNotifications onClickHandler={this.onClickNotificationsMenuHandler} isActive={this.state.isActiveNotificationsMenu} />}
                position="bottom right"
                open={this.state.isNotificationsMenuOpen}
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
                  borderRadius: '5px'
                }}
                offsetY={10}
                arrow={false}>
                <PlusMenu/>
              </Popup>

              <Popup
                trigger={<ButtonProfile onClickHandler={this.onClickProfileMenuHandler} isActive={this.state.isActiveProfileMenu} />}
                position="bottom right"
                open={this.state.isProfileMenuOpen}
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
                  borderRadius: '5px'
                }}
                offsetY={10}
                arrow={false}>
                <ProfileMenu/>
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
                {/*<img src={Notifications} alt="Notifications"/>*/}
              </div>
              <div className={classes.Plus}>
                {/*<img src={Plus} alt="Plus"/>*/}
              </div>
            </div>
          </UserAgent>

        </div>

      </UserAgentProvider>

    );
  }
}

export default onClickOutside(MainNavBar);