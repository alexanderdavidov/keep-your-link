import React, { Component } from 'react';
import PopPlusMenuButton from './PopupsMenuButtons/PopPlusMenuButton';
import onClickOutside from "react-onclickoutside";

class PopPlusMenuButtonWrapper extends Component {
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
        <PopPlusMenuButton
          isHover={this.state.isHover}
          isActive={this.state.isActive}
          isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default onClickOutside(PopPlusMenuButtonWrapper);