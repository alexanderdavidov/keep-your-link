import React, { Component } from 'react';
import classes from './SearchButton.css';

class SearchButton extends Component {
  render() {
    return (
      <div onClick={this.props.click} className={classes.SearchButton}>
        <svg width='16' height='16' viewBox='0 0 31 28' xmlns='http://www.w3.org/2000/svg'>
          <g id='WorkPlace' fill='none' fillRule='evenodd'>
            <g id='Work-Place-Condition-1-|-Start-Page' transform='translate(-1193 -59)'
               stroke="#484848" strokeWidth='3.42'>
              <g id='Search' transform='translate(1184 50)'>
                <g id='Figure' transform='translate(10.946 10.895)'>
                  <ellipse id='Oval-4' cx='10.49' cy='10.4' rx='10.49' ry='10.4' />
                  <path d='M18.6486486,17.3325359 L27.3902027,24.8433014' id='Path-3' />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default SearchButton;