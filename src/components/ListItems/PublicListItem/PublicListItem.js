import React, {Component} from 'react';
import onClickOutside from "react-onclickoutside";
import Formsy from 'formsy-react';

import ListItem from '../ListItem/ListItem';
import {Input} from 'formsy-react-components';

// classes
import classes from '../ListItem/ListItem.css';

// images
import Edit from '../../../assets/images/listsImages/Edit.svg';
import Delete from '../../../assets/images/listsImages/Delete.svg';
import PeopleGroup from '../../../assets/images/listsImages/PeopleGroup.svg';
import Ok from '../../../assets/images/listsImages/Ok.svg';
import DeleteRed from '../../../assets/images/listsImages/DeleteRed.svg';

class PublicListItem extends Component {
  state = {
    listNameInputText: this.props.children,
  }


  onEditClick = () => {
    this.props.onRenameStart(this.props.listId);
  }

  onSubmit = (evt) => {
    this.props.onConfirmRename(this.props.listId, evt.listName)
  }

  onReset = () => {
    this.cancelEditing();
  }

  handleClickOutside = (evt) => {
    this.cancelEditing();
  }

  cancelEditing = () => {
    this.props.onCancelRename(this.props.listId);
  }

  onInvalid = () => {
    console.log('is max length');
  }

  onValid = () => {
    console.log('valid');
  }

  render() {
    let circle;
    if (this.props.isNew) {
      circle = <div className={classes.CircleNew}></div>;
    }
    else if (this.props.isActive) {
      circle = <div className={classes.CircleActive}></div>;
    }

    let listNameBlock;
    let buttons;
    if (!this.props.isEditing) {
      let listItemStyles = [classes.ListItemDisplayInlineBlock];
      if (this.props.isNew) {
        listItemStyles.push(classes.ListItemNew);
        buttons = [
          <button key='accept'>
            <img src={Ok} alt="Ok"/>
          </button>,
          <button key='reject'>
            <img src={DeleteRed} alt="DeleteRed"/>
          </button>,
        ];
      }
      else {
        buttons = [
          <button key='edit' onClick={this.onEditClick}>
            <img src={Edit} alt="Edit"/>
          </button>,
          <button key='peopleGroup'>
            <img src={PeopleGroup} alt="PeopleGroup"/>
          </button>,
          <button key='delete'>
            <img src={Delete} alt="Delete"/>
          </button>,
        ];
      }
      listNameBlock = <div className={listItemStyles.join(' ')}>{this.props.children}</div>;
    }
    else {
      listNameBlock = (
      <Formsy
        className={classes.ListNameInput}
        onSubmit={this.onSubmit}
        onReset={this.onReset}
        onInvalid={this.onInvalid}
        onValid={this.onValid}
      >
        <Input
          name="listName"
          validations="maxLength:19"
          maxLength={20}
          value={this.props.children}
        />
        <button type="submit">
          <img src={Ok} alt="Ok"/>
        </button>
        <button type="reset">
          <img src={DeleteRed} alt="Cancel"/>
        </button>

      </Formsy>
      );
    }

    return (
      <ListItem circle={circle} buttons={buttons} listNameBlock={listNameBlock}/>
    );
  }
}


export default onClickOutside(PublicListItem);