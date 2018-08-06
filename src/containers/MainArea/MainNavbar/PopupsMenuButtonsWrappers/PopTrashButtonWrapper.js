import React, { Component } from 'react';
import PopTrashMenuButton from './PopupsMenuButtons/PopTrashMenuButton';
import onClickOutside from "react-onclickoutside";

class PopTrashButtonWrapper extends Component {
  state = {
    isActive: false,
    isOpen: false,
  }

  handleClickOutside = (evt) => {
    this.setState({
      isActive: false,
      isOpen: false,
    });
  }

  onClickHandler = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <div onClick={this.onClickHandler}>
        <PopTrashMenuButton
          isActive={this.state.isActive}
          isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default onClickOutside(PopTrashButtonWrapper);