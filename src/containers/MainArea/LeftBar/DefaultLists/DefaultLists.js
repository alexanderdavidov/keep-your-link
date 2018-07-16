import React, { Component } from 'react';

// classes
import classes from './DefaultLists.css';

// component
// import DefaultListName from '../../../../components/ListItem/DefaultListItem/DefaultListItem';
import ListItem from '../../../../components/ListItem/ListItem';

class DefaultLists extends Component {
  render() {
    return (
      <div className={classes.DefaultLists}>
        <h1>DEFAULT LISTS</h1>
        <ListItem listItemType='default' type="active" >Incoming weblinks</ListItem>
        <ListItem listItemType='default' type="simple" >Weblinks from users</ListItem>
        <ListItem listItemType='default' type="simple" >Favorites</ListItem>
        <ListItem listItemType='default' type="simple" >Archive</ListItem>
        <ListItem listItemType='default' type="simple" >Trash</ListItem>
      </div>
    );
  }
}

export default DefaultLists;