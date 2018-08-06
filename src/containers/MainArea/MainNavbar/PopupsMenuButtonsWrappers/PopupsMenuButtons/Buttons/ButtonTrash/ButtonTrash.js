import React, { Component } from 'react';
import classes from '../Button.css';

class ButtonTrash extends Component {
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
            <g id='Work-Place-Condition-1-|-Start-Page' transform='translate(-973 -50)'>
              <g id='ButtonTrash' transform='translate(973 50)'>
                <rect id='Rectangle-3' fill='none' width='45' height='44.789' rx='6'
                />
                <g id='FigureTrash' transform='translate(12 6)' stroke={style}>
                  <path d='M2.53997144,10.639237 C2.53852089,10.639237 2.53707072,10.6392838 2.5356232,10.6393774 C2.49847216,10.6417788 2.47030207,10.6738425 2.47270354,10.7109935 L3.70060503,29.7067939 C3.7028976,29.7422603 3.73233249,29.7698539 3.76787293,29.7698539 L17.9211526,29.7698539 C17.956693,29.7698539 17.9861279,29.7422603 17.9884205,29.7067939 L19.2163219,10.7109935 C19.2164155,10.709546 19.2164623,10.7080958 19.2164623,10.7066453 C19.2164623,10.6694167 19.1862826,10.639237 19.1490541,10.639237 L2.53997144,10.639237 Z'
                        id='Rectangle-7' strokeWidth='3.46' />
                  <path d='M5.47826087,4.57142857 L7.05592267,0.621907874 C7.20594988,0.246329541 7.56960317,-3.25637566e-15 7.97403765,-3.33066907e-15 C8.93559032,-3.75520511e-15 9.89714299,-3.61741401e-15 10.8586957,-3.4796229e-15 C11.8854657,-3.65259387e-15 12.9122358,-3.82556484e-15 13.9390058,-3.99853581e-15 L13.9390058,-3.33066907e-15 C14.3434403,-4.12338244e-15 14.7070936,0.246329541 14.8571208,0.621907874 L16.4347826,4.57142857 L5.47826087,4.57142857 Z'
                        id='Path-18' strokeWidth='3.146' />
                  <path d='M0.913043478,5.95061141 L0.913043478,4.10653144 C0.913043478,3.85834098 1.1142416,3.65714286 1.36243207,3.65714286 L20.5506114,3.65714286 C20.7988019,3.65714286 21,3.85834098 21,4.10653144 L21,5.95061141 C21,6.19880188 20.7988019,6.4 20.5506114,6.4 L1.36243207,6.4 C1.1142416,6.4 0.913043478,6.19880188 0.913043478,5.95061141 Z'
                        id='Path-19' strokeWidth='0.899' fill={style} />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default ButtonTrash;