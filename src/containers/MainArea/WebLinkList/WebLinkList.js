import React, { Component } from 'react';

// classes
import classes from './WebLinkList.css';

// images
import ListBurger from '../../../assets/images/mainAreaImages/ListBurger.svg';

// components
import ListHeader from '../../../components/ListHeader/ListHeader';

// containers
import SuperWebLinkList from './SuperWebLinkList/SuperWebLinkList';

class WebLinkList extends Component {
  render() {
    return (
      <div className={classes.WebLinkList}>
        <ListHeader>Incoming weblinks</ListHeader>
        <img style={{cursor: 'pointer', width: '25px'}} src={ListBurger} alt="ListBurger"/>
        <SuperWebLinkList />
      </div>
    );
  }
}

export default WebLinkList;