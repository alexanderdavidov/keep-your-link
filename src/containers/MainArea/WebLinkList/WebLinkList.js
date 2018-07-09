import React, { Component } from 'react';

// classes
import classes from './WebLinkList.css';

// images
import ListBurger from '../../../assets/images/mainAreaImages/ListBurger.svg';

// containers
import SuperWebLinkList from './SuperWebLinkList/SuperWebLinkList';

class WebLinkList extends Component {
  state = {
    isTrash: false
  }
  render() {
    return (
      <div className={classes.WebLinkList}>
        <h1>Incoming weblinks</h1>
        <img style={{cursor: 'pointer', width: '25px'}} src={ListBurger} alt="ListBurger" />
        <SuperWebLinkList />
      </div>
    );
  }
}

export default WebLinkList;