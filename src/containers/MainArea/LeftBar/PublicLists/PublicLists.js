import React, {Component} from 'react';

// classes
import classes from './PublicLists.css';
import leftBarClasses from '../LeftBar.css';

// image
import Plus from '../../../../assets/images/listsImages/Plus.svg';

// component
import PublicListItem from '../../../../components/ListItems/PublicListItem/PublicListItem';
import {updateObject} from "../../../../shared/utility";

class PublicLists extends Component {
  state = {
    lists: {
      0: {isEditing: false, isNew: true, isActive: false, listName: 'New List One'},
      1: {isEditing: false, isNew: false, isActive: false, listName: 'New List Two'},
      2: {isEditing: false, isNew: false, isActive: false, listName: 'New List Three'},
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
                  isNew: false,
                  listName: 'New list'
                }
            })
        })
    });
  }

  onConfirmRename = (listId, listName) => {
    this.setState((prevState, props) => {
      const updatedList = {[listId]: updateObject(prevState.lists[listId], {isEditing: false, listName: listName})};
      // const updatedList = {[listId]: { ...prevState.lists[listId], isEditing: false, listName: listName}};
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
      const isNew = this.state.lists[listId].isNew;
      const isEditing = this.state.lists[listId].isEditing;
      lists.push(
        <PublicListItem
          listId={listId}
          key={`pr_list: ${listId}`}
          isNew={isNew}
          isActive={isActive}
          isEditing={isEditing}
          onConfirmRename={this.onConfirmRename}
          onCancelRename={this.onCancelRename}
          onRenameStart={this.onRenameStart}
        >
          {listName}
        </PublicListItem>
      );
    }
    lists.reverse();

    return (
      <div className={classes.PublicLists}>
        <div className={leftBarClasses.TitleAndPlus}>
          <h1>PUBLIC LISTS</h1>
          <img className={leftBarClasses.Plus} onClick={this.addNewList} src={Plus} alt="Plus" />
        </div>
        {lists}
      </div>



    );
  }
}

export default PublicLists;