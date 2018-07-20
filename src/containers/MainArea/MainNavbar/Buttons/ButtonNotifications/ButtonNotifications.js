import React, { Component } from 'react';
import classes from '../Button.css';
import onClickOutside from "react-onclickoutside";

class ButtonNotifications extends Component {
  state = {
    hover: false,
    selected: false
  }

  onMouseEnter = () => {
    this.setState({
      hover: true
    });
  }

  onMouseLeave = () => {
    this.setState({
      hover: false
    });
  }

  onClick = () => {
    this.setState({
      selected: true
    });
    this.props.onClick();
  }

  handleClickOutside = (evt) => {
    this.setState({
      selected: false
    });
    this.props.onClickOutside();

  }

  render() {
    let style;
    if (this.state.hover || this.state.selected) {
      style = '#535353';
    } else {
      style = '#999999';
    }
    return (
      <div className={classes.Button} onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <svg viewBox='0 0 45 45' xmlns='http://www.w3.org/2000/svg'>
          <g id='WorkPlace' fill='transparent' fillRule='evenodd'>
            <g id='Work-Place-Condition-1-|-Start-Page' transform='translate(-1244 -50)'>
              <g id='Notice' transform='translate(1244 50)'>
                <rect id='Rectangle-3' width='45' height='45' rx='6'/>
                {this.props.isNew && <circle id='Oval-7' fill='#D0021B' cx='33.5' cy='3.5' r='2.5'/>}
                <g id='Bell' transform='translate(10.946 7.263)' stroke={style}>
                  <path
                    d='M11.5540541,4.73205742 C6.16216216,4.73205742 4.53846392,8.46110824 4.62162162,10.1244019 C4.87837838,15.2599681 3.33783784,18.7264753 0,20.5239234 L0,23.2200957 C2.82432432,23.9904306 6.67567568,24.3755981 11.5540541,24.3755981'
                    id='Path-4' strokeWidth='2.4'/>
                  <path
                    d='M23.1081081,4.73205742 C17.7162162,4.73205742 16.092518,8.46110824 16.1756757,10.1244019 C16.4324324,15.2599681 14.8918919,18.7264753 11.5540541,20.5239234 L11.5540541,23.2200957 C14.3783784,23.9904306 18.2297297,24.3755981 23.1081081,24.3755981'
                    id='Path-4' strokeWidth='2.4' transform='matrix(-1 0 0 1 34.662 0)'/>
                  <path
                    d='M8.51351351,25.4210526 C8.51351351,27.4752791 9.45945946,28.5023923 11.3513514,28.5023923 C13.2432432,28.5023923 14.1891892,27.4752791 14.1891892,25.4210526'
                    id='Path-10' strokeWidth='2.4'/>
                  <path
                    d='M9.24324324,5.11722488 C9.5,2.1092504 10.2702703,0.605263158 11.5540541,0.605263158 C12.8378378,0.605263158 13.6081081,2.1092504 13.8648649,5.11722488'
                    id='Path-11' strokeWidth='2.04'/>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default onClickOutside(ButtonNotifications);