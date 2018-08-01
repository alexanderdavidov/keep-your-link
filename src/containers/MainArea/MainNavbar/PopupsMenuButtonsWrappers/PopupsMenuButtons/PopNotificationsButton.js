import React, { Component } from 'react';
import Popup from "reactjs-popup";
import ButtonNotifications from './Buttons/ButtonNotifications/ButtonNotifications';
import NotificationsMenu from './Menus/NotificationsMenu/NotificationsMenu';

class PopNotificationsButton extends Component {
  render() {
    return (
      <Popup
        trigger={<ButtonNotifications isActive={this.props.isActive} />}
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
          height: 'auto',
          boxShadow: '1px 1px 3px rgba(83, 83, 83, 0.5)',
          borderRadius: '2px'
        }}
        offsetY={10}
        arrow={false}>
        <NotificationsMenu />
      </Popup>
    );
  }
}

export default PopNotificationsButton;