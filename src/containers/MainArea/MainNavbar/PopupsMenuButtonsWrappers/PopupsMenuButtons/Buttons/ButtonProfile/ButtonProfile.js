import React, { Component } from 'react';
import classes from '../Button.css';

class ButtonProfile extends Component {
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
        <svg viewBox='0 0 45 45' xmlns='http://www.w3.org/2000/svg'
             xmlnsXlink='http://www.w3.org/1999/xlink'>
          <defs>
            <ellipse id='path-1' cx='14.4' cy='8.28' rx='8.319' ry='8.28' />
          </defs>
          <g id='WorkPlace' fill='none' fillRule='evenodd'>
            <g id='Work-Place-Condition-1-|-Start-Page' transform='translate(-1299 -50)'>
              <g id='Person' transform='translate(1299 50)'>
                <rect id='Rectangle-3' width='45' height='44.789' rx='6' />
                <g transform='translate(8.514 7.263)'>
                  <path d='M0,31.4736842 L0,26.7122807 C1.23243243,22.6233918 6.00810811,20.5789474 14.327027,20.5789474 C22.6459459,20.5789474 27.4216216,22.6233918 28.6540541,26.7122807 L28.6540541,31.4736842 C25.3675676,31.4736842 20.5918919,31.4736842 14.327027,31.4736842 C8.06216216,31.4736842 3.28648649,31.4736842 0,31.4736842 Z'
                        id='Path-2' fill={style} />
                  <mask id='mask-2' fill='#fff'>
                    <use xlinkHref='#path-1' />
                  </mask>
                  <use id='Oval' fill={style} xlinkHref='#path-1' />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default ButtonProfile;