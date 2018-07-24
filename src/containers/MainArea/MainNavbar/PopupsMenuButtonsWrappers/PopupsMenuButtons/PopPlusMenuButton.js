import React, { Component } from 'react';
import Popup from "reactjs-popup";
import ButtonPlus from './Buttons/ButtonPlus/ButtonPlus';
import PlusMenu from './PlusMenu/PlusMenu';

class PopPlusMenuButton extends Component {
  render() {
    return (
        <Popup
          trigger={<ButtonPlus isActive={this.props.isActive} isHover={this.props.isHover} />}
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
            borderRadius: '5px'
          }}
          offsetY={10}
          arrow={false}>
          <PlusMenu />
        </Popup>
    );
  }
}

export default PopPlusMenuButton;