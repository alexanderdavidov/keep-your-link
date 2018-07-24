import React, { Component } from 'react';
import PopProfileMenuButton from './PopupsMenuButtons/PopProfileMenuButton';
import onClickOutside from "react-onclickoutside";

class PopProfileMenuButtonWrapper extends Component {
  state = {
    isActive: false,
    isOpen: false
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
        <PopProfileMenuButton isActive={this.state.isActive} isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default onClickOutside(PopProfileMenuButtonWrapper);