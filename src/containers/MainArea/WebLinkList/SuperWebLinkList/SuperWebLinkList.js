import React, { Component } from 'react';

// classes
import classes from './SuperWebLinkList.css';

// containers
import WebLinkBlock from './WebLinkBlock/WebLinkBlock';

class SuperWebLinkList extends Component {
  render() {
    return (
      <div className={classes.SuperWebLinkList}>
        <div className={classes.Block}>
          <WebLinkBlock />
        </div>
      </div>
    );
  }
}

export default SuperWebLinkList;