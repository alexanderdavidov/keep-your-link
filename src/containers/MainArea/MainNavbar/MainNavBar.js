import React, {Component} from 'react';
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent';
import Hoc from '../../hoc/hoc';

// SearchButton
import SearchButton from './SearchButton/SearchButton';

// PopupsMenuButtonsWrappers
import PopPlusMenuButtonWrapper from './PopupsMenuButtonsWrappers/PopPlusMenuButtonWrapper';
import PopProfileMenuButtonWrapper from './PopupsMenuButtonsWrappers/PopProfileMenuButtonWrapper';
import PopNotificationsButtonWrapper from './PopupsMenuButtonsWrappers/PopNotificationsButtonWrapper';


// classes
import classes from './MainNavBar.css';

// images
import LogoKeepYourLink from '../../../assets/logo/LogoKeepYourLink.svg';
import ListBurger from '../../../assets/images/mainAreaImages/ListBurger.svg';

class MainNavBar extends Component {

  state = {
    value: '',
    searchInputActive: false,
    logoActive: false
  }

  onMainNavBarLeave = () => {
    this.setState({searchInputActive: false});
    document.getElementById("searchInput").blur();
  }

  onSearchInputClick = () => {
    this.setState({searchInputActive: true});
  }

  onChangeValueHandler = (e) => {
    this.setState({value: e.target.value});
  }

  onClickSearchImageHandler = () => {
    document.getElementById("searchInput").focus();
    this.setState({searchInputActive: true});
  }

  onLogoEnterHandler = () => {
    this.setState({logoActive: true});
  }

  onLogoLeaveHandler = () => {
    this.setState({logoActive: false});
  }

  render() {
    let searchOpacityStyle;
    (this.state.searchInputActive || this.state.value) && (searchOpacityStyle = {opacity: '1'});

    let logoTextStyle;
    let logoImageOpacityStyle;
    (this.state.logoActive) && (logoTextStyle = {color: '#000000'});
    (this.state.logoActive) && (logoImageOpacityStyle = {opacity: '1'});


    return (
      <UserAgentProvider ua={window.navigator.userAgent}>
        <Hoc>
        {/* Desktop !*/}
          <UserAgent computer>
            <div className={classes.MainNavBar} onMouseLeave={this.onMainNavBarLeave}>

              <div className={classes.SearchInput} style={searchOpacityStyle}>
                <SearchButton click={this.onClickSearchImageHandler} />
                <form action="" autoComplete="off">
                  <input onClick={this.onSearchInputClick} id="searchInput" type="text" onChange={this.onChangeValueHandler} value={this.state.value} />
                </form>
              </div>

              <div className={classes.LogoKeepYourLinkWrapper}>
                <div className={classes.LogoKeepYourLink}
                     onMouseEnter={this.onLogoEnterHandler}
                     onMouseLeave={this.onLogoLeaveHandler}>
                  <img className={classes.LogoImage} style={logoImageOpacityStyle} src={LogoKeepYourLink} alt="LogoKeepYourLink"/>
                  <div className={classes.LogoText} style={logoTextStyle}>Keep Your Link</div>
                </div>
              </div>

              <div className={classes.MainNavBarButtons}>
                <PopPlusMenuButtonWrapper />
                <PopNotificationsButtonWrapper />
                <PopProfileMenuButtonWrapper />
              </div>

            </div>

          </UserAgent>
          {/* Mobile !*/}
          <UserAgent mobile>
            <div className={classes.MainNavBar}>
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
            </div>
          </UserAgent>
        </Hoc>
      </UserAgentProvider>

    );
  }
}

export default MainNavBar;