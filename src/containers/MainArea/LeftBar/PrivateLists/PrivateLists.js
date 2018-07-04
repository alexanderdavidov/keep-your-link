import React, { Component } from 'react';

// classes
import classes from './PrivateLists.css';

// components
import PrivateListItem from '../../../../components/ListItem/PrivateListItem/PrivateListItem';

// image
import Plus from '../../../../assets/images/listsImages/Plus.svg';

class PrivateLists extends Component {
  render() {
    return (
      <div className={classes.PrivateLists}>
        <h1>PRIVATE LISTS</h1>
        <img style={{height: '14px', cursor: 'pointer'}} src={Plus} alt="Plus"/>
        <PrivateListItem type="simple">Films</PrivateListItem>
        <PrivateListItem type="simple">Learning English</PrivateListItem>
        <PrivateListItem type="simple">Awesome Gifts</PrivateListItem>
      </div>
    );
  }
}

export default PrivateLists;