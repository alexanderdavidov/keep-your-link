import React, {Component} from 'react';
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent'
import Popup from "reactjs-popup";
import Formsy from 'formsy-react';
import {Input} from 'formsy-react-components';
import onClickOutside from "react-onclickoutside";

// MenuButtons
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
    plusMenuOpened: false,
    notificationsMenuOpened: false,
    profileMenuOpened: false
  }
  onSearchInputClick = () => {
    this.setState({searchInputActive: true});
  }
  onSearchInputLeave = () => {
    this.setState({searchInputActive: false});
  }

  plusMenuOpen = () => {
    this.setState({plusMenuOpened: true});
  }

  plusMenuClose = () => {
    this.setState({plusMenuOpened: false});
  }

  notificationsMenuOpen = () => {
    this.setState({notificationsMenuOpened: true});
  }

  notificationsMenuClose = () => {
    this.setState({notificationsMenuOpened: false});
  }

  profileMenuOpen = () => {
    this.setState({profileMenuOpened: true});
  }

  profileMenuClose = () => {
    this.setState({profileMenuOpened: false});
  }

  handleClickOutside = (evt) => {
    this.setState({
      selected: false
    });
    this.props.onClickOutside();
  }

  render() {
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
              <img src={Search} alt="Search" onClick={() => {
                this.searchInputComponent.element.focus()
              }}/>
              <Formsy
                className={classes.ListNameInput}
                // onInvalid={this.onInvalid}
                // onValid={this.onValid}
              >
                <Input
                  name="searchInput"
                  validations="maxLength:9"
                  maxLength={10}
                  type="text"
                  componentRef={(node) => {
                    this.searchInputComponent = node;
                  }}
                />
              </Formsy>
            </div>
            <div className={classes.LogoKeepYourLinkWrapper}>
              <div className={classes.LogoKeepYourLink}>
                <img className={classes.LogoImage} src={LogoKeepYourLink} alt="LogoKeepYourLink"/>
                <div className={classes.LogoText}>Keep Your Link</div>
              </div>
            </div>
            <div className={classes.MainNavBarButtons}>
              <Popup
                trigger={<ButtonPlus onClick={this.plusMenuOpen} onClickOutside={this.plusMenuClose}/>}
                position="bottom right"
                open={this.state.plusMenuOpened}
                // on="click"
                // closeOnDocumentClick
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
                arrow={false}>
                <PlusMenu/>
              </Popup>

              <Popup
                trigger={<ButtonNotifications onClick={this.notificationsMenuOpen} onClickOutside={this.notificationsMenuClose}/>}
                position="bottom right"
                open={this.state.notificationsMenuOpened}
                // on="click"
                // closeOnDocumentClick
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
                arrow={false}>
                <PlusMenu/>
              </Popup>

              <Popup
                trigger={<ButtonProfile onClick={this.profileMenuOpen} onClickOutside={this.plusMenuClose} />}
                position="bottom right"
                open={this.state.profileMenuOpened}
                // on="click"
                // closeOnDocumentClick
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