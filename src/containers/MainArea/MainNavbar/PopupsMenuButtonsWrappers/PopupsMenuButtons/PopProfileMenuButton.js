import React, { Component } from 'react';
import Popup from "reactjs-popup";
import ButtonProfile from './Buttons/ButtonProfile/ButtonProfile';
import ProfileMenu from './Menus/ProfileMenu/ProfileMenu';

class PopProfileMenuButton extends Component {

  state = {
    isSignOutButtonPressed: false,
    widthForm: '300px',
    heightForm: '400px',
  }

  onClickSignOutButtonHandler = () => {
    this.setState({
      isSignOutButtonPressed: true,
      widthForm: '300px',
      heightForm: '150px',
    });
  }

  onClickYesHandler = () => {
    this.setState({
      isSignOutButtonPressed: false,
      widthForm: '300px',
      heightForm: '400px',
    });
  }

  render() {
    return (
      <Popup
        trigger={<ButtonProfile isActive={this.props.isActive} />}
        position="bottom right"
        open={this.props.isOpen}
        mouseLeaveDelay={0}
        mouseEnterDelay={0}
        contentStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          padding: "0px",
          border: "none",
          width: this.state.widthForm,
          height: this.state.heightForm,
          boxShadow: '1px 1px 3px rgba(83, 83, 83, 0.5)',
          borderRadius: '5px',
          zIndex: '1000'
        }}
        offsetY={10}
        arrow={false}>
        <ProfileMenu
          onClickYes={this.onClickYesHandler}
          isSignOutButtonPressed={this.state.isSignOutButtonPressed}
          onClickSignOutButton={this.onClickSignOutButtonHandler} />
      </Popup>
    );
  }
}

export default PopProfileMenuButton;