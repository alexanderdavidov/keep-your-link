import React, { Component } from 'react';
import classes from '../Button.css';

class ButtonPlus extends Component {
  state = {
    hover: false
  }

  onMouseEnterHandler = () => {
    this.setState({
      hover: true
    });
  }

  onMouseLeaveHandler = () => {
    this.setState({
      hover: false
    });
  }

    render() {
    let style;
    if (this.state.hover || this.props.isActive) {
      style = '#000000';
    } else {
      style = '#484848';
    }
    return (
      <div className={classes.Button} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
        <svg viewBox='0 0 45 45' xmlns='http://www.w3.org/2000/svg'>
          <g id='WorkPlace' fill='none' fillRule='evenodd'>
            <g id='Work-Place-Condition-1-|-Start-Page' transform='translate(-1079 -50)'>
              <g id='Plus' transform='translate(1079 50)'>
                <rect id='Rectangle-3' width='45' height='44.789' rx='6' />
                <g id='Figure' transform='translate(10.946 10.895)' fill={style}>
                  <rect id='Rectangle-5' y='9.079' width='23.108' height='4.842' rx='0.96'
                  />
                  <rect id='Rectangle-5' transform='rotate(90 11.554 11.5)' y='9.079' width='23.108'
                        height='4.842' rx='0.96' />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default ButtonPlus;