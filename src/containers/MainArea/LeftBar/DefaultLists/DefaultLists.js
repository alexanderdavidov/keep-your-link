import React, { Component } from 'react';

// classes
import classes from './DefaultLists.css';

// component
import DefaultListItem from '../../../../components/ListItems/DefaultListItem/DefaultListItem';

class DefaultLists extends Component {
  render() {
    return (
      <div className={classes.DefaultLists}>
        <h1>DEFAULT LISTS</h1>

        <DefaultListItem isActive>Uploaded by me</DefaultListItem>
        <DefaultListItem>From users</DefaultListItem >
        <DefaultListItem>Favorites</DefaultListItem>
        <DefaultListItem>Archive</DefaultListItem>
        <DefaultListItem>Trash</DefaultListItem>
      </div>
    );
  }
}

export default DefaultLists;