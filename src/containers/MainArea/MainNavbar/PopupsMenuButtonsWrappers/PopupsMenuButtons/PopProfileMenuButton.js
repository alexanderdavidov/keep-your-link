import React, { Component } from 'react';
import Popup from "reactjs-popup";
import ButtonProfile from './Buttons/ButtonProfile/ButtonProfile';
import ProfileMenu from './Menus/ProfileMenu/ProfileMenu';

class PopProfileMenuButton extends Component {
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
          width: '300px',
          boxShadow: '1px 1px 3px rgba(83, 83, 83, 0.5)',
          borderRadius: '2px',
          zIndex: '1000'
        }}
        offsetY={10}
        arrow={false}>
        <ProfileMenu />
      </Popup>
    );
  }
}

export default PopProfileMenuButton;