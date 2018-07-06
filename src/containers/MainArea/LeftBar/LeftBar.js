import React, { Component } from 'react';

// classes
import classes from './LeftBar.css';

// containers
import DefaultLists from './DefaultLists/DefaultLists';
import PrivateLists from './PrivateLists/PrivateLists';
import PublicLists from './PublicLists/PublicLists';

class LeftBar extends Component {
  render() {
    return (
      <div className={classes.LeftBar}>
        <DefaultLists />
        <PrivateLists />
        <PublicLists />
        <DefaultLists />
        <PrivateLists />
        <PublicLists />
      </div>
    );
  }
}

export default LeftBar;