import React, {Component} from 'react';

// import { updateObject } from '../../../../shared/utility'

// classes
import classes from './PrivateLists.css';
import leftBarClasses from '../LeftBar.css';

// components
import PrivateListItem from '../../../../components/ListItems/PrivateListItem/PrivateListItem';

// image
import Plus from '../../../../assets/images/listsImages/Plus.svg';
import {updateObject} from "../../../../shared/utility";

class PrivateLists extends Component {
  state = {
    lists: {
      0: {isEditing: false, isActive: false, listName: 'Films'},
      1: {isEditing: false, isActive: false, listName: 'Learning English'},
      2: {isEditing: false, isActive: false, listName: 'Why Are We So Certain?'},
    }
  }

  addNewList = () => {
    this.setState((prevState, props) => {
      return (
        {
          lists: updateObject(this.state.lists,
            {
              [Object.keys(prevState.lists).length]:
                {
                  isEditing: true,
                  isActive: false,
                  listName: 'New list'
                }
            })
        })
    });
  }

  onConfirmRename = (listId, listName) => {
    this.setState((prevState, props) => {
      const updatedList = {[listId]: updateObject(prevState.lists[listId], {isEditing: false, listName: listName})};
      return {lists: updateObject(prevState.lists, updatedList)};
    });
  }

  onCancelRename = (listId) => {
    this.setState((prevState, props) => {
      const updatedList = {[listId]: updateObject(prevState.lists[listId], {isEditing: false})};
      return {lists: updateObject(prevState.lists, updatedList)};
    });
  }

  onRenameStart = (listId) => {
    this.setState((prevState, props) => {
      const updatedList = {[listId]: updateObject(prevState.lists[listId], {isEditing: true})};
      return {lists: updateObject(prevState.lists, updatedList)};
    });
  }

  render() {
    const lists = [];
    for (let listId in this.state.lists) {
      const listName = this.state.lists[listId].listName;
      const isActive = this.state.lists[listId].isActive;
      const isEditing = this.state.lists[listId].isEditing;
      lists.push(
        <PrivateListItem
          listId={listId}
          key={`pr_list: ${listId}`}
          isActive={isActive}
          isEditing={isEditing}
          onConfirmRename={this.onConfirmRename}
          onCancelRename={this.onCancelRename}
          onRenameStart={this.onRenameStart}
        >
          {listName}
        </PrivateListItem>
      );
    }
    lists.reverse();

    return (
      <div className={classes.PrivateLists}>
        <h1>PRIVATE LISTS</h1>
        <div onClick={this.addNewList} className={leftBarClasses.ListsPlusButton}>
          <img src={Plus} alt="Plus"/>
        </div>
        {lists}

      </div>
    );
  }
}

export default PrivateLists;