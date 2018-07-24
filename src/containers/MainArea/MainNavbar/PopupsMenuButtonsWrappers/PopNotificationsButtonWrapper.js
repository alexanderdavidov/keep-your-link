import React, { Component } from 'react';
import PopNotificationsButton from './PopupsMenuButtons/PopNotificationsButton';
import onClickOutside from "react-onclickoutside";

class PopNotificationsButtonWrapper extends Component {
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
        <PopNotificationsButton isActive={this.state.isActive} isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default onClickOutside(PopNotificationsButtonWrapper);