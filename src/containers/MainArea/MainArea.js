import React, {Component} from 'react';
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent'
import Hoc from '../hoc/hoc';

// containers
import MainNavBar from './MainNavbar/MainNavBar';
import LeftBar from './LeftBar/LeftBar';
import WebLinkList from './WebLinkList/WebLinkList';
import SideDrawer from './SideDrawer/SideDrawer';

class MainArea extends Component {
  state = {
    showSideDrawer: false
  }

  onBurgerButtonClick = () => {
    this.setState({showSideDrawer: true});
  }

  onBackDropClick = () => {
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
      <Hoc>
        <MainNavBar onBurgerButtonClick={this.onBurgerButtonClick}/>
        <UserAgentProvider ua={window.navigator.userAgent}>
          <Hoc>
            <UserAgent computer>
              <LeftBar/>
            </UserAgent>
            <UserAgent mobile>
              {this.state.showSideDrawer && <SideDrawer onBackDropClick={this.onBackDropClick} />}
            </UserAgent>
          </Hoc>
        </UserAgentProvider>
        <WebLinkList isNotScrolable={this.state.showSideDrawer} />
      </Hoc>
    );
  }
}

export default MainArea;