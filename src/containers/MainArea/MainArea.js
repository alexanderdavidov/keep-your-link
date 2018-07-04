import React, { Component } from 'react';

// classes
import classes from './MainArea.css';

// containers
import MainNavBar from './MainNavbar/MainNavBar';
import LeftBar from './LeftBar/LeftBar';
import WebLinkList from './WebLinkList/WebLinkList';

class MainArea extends Component {
  render() {
    return (
      <div className={classes.MainArea}>
        <div className={classes.MainNavBar}>
          <MainNavBar />
        </div>
        <div className={classes.LeftBar}>
          <LeftBar />
        </div>
        <div className={classes.WebLinkList}>
          <WebLinkList />
        </div>
      </div>
    );
  }
}

export default MainArea;