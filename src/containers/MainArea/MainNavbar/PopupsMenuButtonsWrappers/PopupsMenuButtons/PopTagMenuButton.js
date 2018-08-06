import React, { Component } from 'react';
import Popup from "reactjs-popup";
import ButtonTag from './Buttons/ButtonTag/ButtonTag';
import TagMenu from './Menus/TagMenu/TagMenu';

class PopPlusMenuButton extends Component {
  render() {
    return (
      <Popup
        trigger={<ButtonTag isActive={this.props.isActive} />}
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
          width: '500px',
          height: '60px',
          boxShadow: '1px 1px 3px rgba(83, 83, 83, 0.5)',
          borderRadius: '2px'
        }}
        offsetY={10}
        arrow={false}>
        <TagMenu />
      </Popup>
    );
  }
}

export default PopPlusMenuButton;