import React, { Component } from 'react';

// classes
import classes from './DefaultLists.css';

// component
import DefaultListName from '../../../../components/ListItem/DefaultListItem/DefaultListItem';

class DefaultLists extends Component {
  render() {
    return (
      <div className={classes.DefaultLists}>
        <h1>DEFAULT LISTS</h1>
        <DefaultListName type="active">Incoming weblinks</DefaultListName>
        <DefaultListName type="simple">Weblinks from users</DefaultListName>
        <DefaultListName type="simple">Favorites</DefaultListName>
        <DefaultListName type="simple">Archive</DefaultListName>
        <DefaultListName type="simple">Trash</DefaultListName>
      </div>
    );
  }
}

export default DefaultLists;