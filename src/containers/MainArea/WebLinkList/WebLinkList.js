import React, { Component } from 'react';

// classes
import classes from './WebLinkList.css';

// containers
import SuperWebLinkList from './SuperWebLinkList/SuperWebLinkList';

class WebLinkList extends Component {
  state = {
    isTrash: false
  }

  render() {
    let style;
    if (this.props.isScrolable) {
      style = {
        overflowY: 'visible'
      }
    }
    else {
      style = {
        overflowY: 'hidden'
      }
    }

    let highButton = null;
    if (this.state.isTrash) {
      highButton = <div className={classes.HighButton}>emptyTrash</div>;
    } else {
      highButton = <div className={classes.HighButton}>#tagFilter</div>;
    }
    return (
      <div style={style}  className={classes.WebLinkList}>
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