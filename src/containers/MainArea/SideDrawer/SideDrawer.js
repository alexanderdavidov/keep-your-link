import React, {Component} from 'react';

// classes
import classes from './SideDrawer.css';

// containers
// import DefaultLists from './DefaultLists/DefaultLists';
// import PrivateLists from './PrivateLists/PrivateLists';
// import PublicLists from './PublicLists/PublicLists';

class SideDrawer extends Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <div className={classes.SideDrawer}>
          <h1>DefaultLists</h1>
          <h1>DefaultLists</h1>
          <h1>DefaultLists</h1>
          <h1>DefaultLists</h1>
          <h1>DefaultLists</h1>
          <h1>DefaultLists</h1>
          <h1>DefaultLists</h1>
          <h1>DefaultLists</h1>
          <h1>DefaultLists</h1>
          <h1>DefaultLists</h1>
          <h1>DefaultLists</h1>
          <h1>PrivateLists</h1>
          <h1>PublicLists</h1>
        </div>
        <div onClick={this.props.onBackDropClick} className={classes.BackDrop}></div>
      </div>
    );
  }
}

export default SideDrawer;