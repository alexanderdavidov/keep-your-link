import React, { Component } from 'react';

class PhotoButton extends Component {

  state = {
    isHover: false
  }

  onMouseEnterHandler = () => {
    this.setState({
      isHover: true
    });
  }

  onMouseLeaveHandler = () => {
    this.setState({
      isHover: false
    });
  }

  render() {
    let color;
    if (this.state.isHover) {
      color = 'rgba(255, 255, 255, 1)';
    } else {
      color = 'rgba(255, 255, 255, 0.7)';
    }
    return (
      <div onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
        <svg viewBox='0 0 226 226' xmlns='http://www.w3.org/2000/svg'>
          <g id='Page-6' fill='none' fillRule='evenodd'>
            <g id='photo'>
              <circle id='Oval-2' fill='rgba(255, 255, 255, 0.3)' cx='113' cy='113'
                      r='113' />
              <path d='M63,163 L163,163 C168.522847,163 173,158.522847 173,153 L173,88.071066 C173,82.5482185 168.522847,78.071066 163,78.071066 L141.529588,78.071066 C139.413584,78.071066 137.526692,76.7390754 136.818193,74.745209 L134.181807,67.325857 C133.473308,65.3319906 131.586416,64 129.470412,64 L96.5295882,64 C94.413584,64 92.5266917,65.3319906 91.8181929,67.325857 L89.1818071,74.745209 C88.4733083,76.7390754 86.586416,78.071066 84.4704118,78.071066 L63,78.071066 C57.4771525,78.071066 53,82.5482185 53,88.071066 L53,153 C53,158.522847 57.4771525,163 63,163 Z'
                    id='Path' stroke={color} strokeWidth='5' />
              <circle id='Oval' stroke={color} strokeWidth='5' cx='113' cy='119' r='25'
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default PhotoButton;