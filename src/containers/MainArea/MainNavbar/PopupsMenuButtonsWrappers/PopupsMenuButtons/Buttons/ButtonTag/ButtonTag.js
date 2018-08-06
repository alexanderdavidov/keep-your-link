import React, { Component } from 'react';
import classes from '../Button.css';

class ButtonTag extends Component {
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
            <g id='Work-Place-Condition-1-|-Start-Page' transform='translate(-1028 -50)'>
              <g id='ButtonTag' transform='translate(1028 50)'>
                <rect id='Rectangle-3' fill='none' width='45' height='44.789' rx='6'
                />
                <g id='FigureTag' transform='translate(8 7)' stroke={style} strokeWidth='3.5'>
                  <path d='M11.3426994,30.0355569 L23.4167376,18.1985158 C23.6298927,17.9895447 23.75,17.7035962 23.75,17.4050933 L23.75,8.72649573 C23.75,8.112846 23.2525386,7.61538462 22.6388889,7.61538462 L13.9788503,7.61538462 C13.6866015,7.61538462 13.4061196,7.73052545 13.1981647,7.93586441 L1.03430571,19.9467088 C0.59765209,20.3778695 0.593199247,21.0813721 1.02436001,21.5180257 C1.02970289,21.5234367 1.03510118,21.5287926 1.04055403,21.5340928 L9.79041343,30.0388871 C10.2229635,30.4593223 10.9119572,30.4578442 11.3426994,30.0355569 Z'
                        id='Path-6' />
                  <path d='M17.9545455,12.5384615 C18.2925408,3.33136095 20.6410256,-0.514792899 25,1 C29.3589744,2.5147929 30.6089744,6.36094675 28.75,12.5384615'
                        id='Path-7' />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default ButtonTag;