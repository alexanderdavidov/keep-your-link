import React, { Component } from 'react';

// classes
import classes from './WebLinkList.css';

// containers
import SuperWebLinkList from './SuperWebLinkList/SuperWebLinkList';

class WebLinkList extends Component {
  state = {
    isTrash: true
  }

  render() {
    let highButton = null;
    if (this.state.isTrash) {
      highButton = <div className={classes.HighButton}>Empty Trash</div>;
    } else {
      highButton = <div className={classes.HighButton}>Tag Filter</div>;
    }
    return (
      <div className={classes.WebLinkList}>
        <div className={classes.WrapperHeader}>
          <h1>Incoming weblinks</h1>
          {highButton}
        </div>
        <SuperWebLinkList />
      </div>
    );
  }
}

export default WebLinkList;