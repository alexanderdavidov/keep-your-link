import React, {Component} from 'react';
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent';

// PopupsMenuButtonsWrappers
import PopPlusMenuButtonWrapper from './PopupsMenuButtonsWrappers/PopPlusMenuButtonWrapper';
import PopProfileMenuButtonWrapper from './PopupsMenuButtonsWrappers/PopProfileMenuButtonWrapper';
import PopNotificationsButtonWrapper from './PopupsMenuButtonsWrappers/PopNotificationsButtonWrapper';


// classes
import classes from './MainNavBar.css';

// images
import Search from '../../../assets/images/Search.svg';
import LogoKeepYourLink from '../../../assets/logo/LogoKeepYourLink.svg';
import ListBurger from '../../../assets/images/mainAreaImages/ListBurger.svg';

class MainNavBar extends Component {

  state = {
    value: '',
    searchInputActive: false
  }

  onMainNavBarLeave = () => {
    document.getElementById("searchInput").blur();
    this.setState({searchInputActive: false});
  }

  onSearchInputClick = () => {
    this.setState({searchInputActive: true});
  }

  onChangeValueHandler = (e) => {
    this.setState({value: e.target.value});
  }

  onClickSearchImageHandler = () => {
    document.getElementById("searchInput").focus();
  }

  render() {
    let inputOpacityStyle;
    if (this.state.searchInputActive || this.state.value) {
      inputOpacityStyle = {opacity: '1'};
    }
    return (
      <UserAgentProvider ua={window.navigator.userAgent}>
        <div className={classes.MainNavBar} onMouseLeave={this.onMainNavBarLeave}>
          {/* Desktop !*/}
          <UserAgent computer>
            <div className={classes.SearchInput} onClick={this.onSearchInputClick} style={inputOpacityStyle}>
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
              <PopPlusMenuButtonWrapper />
              <PopNotificationsButtonWrapper />
              <PopProfileMenuButtonWrapper />
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

export default MainNavBar;