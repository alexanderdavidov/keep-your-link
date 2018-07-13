import React from 'react';
import classes from '../../containers/MainArea/WebLinkList/SuperWebLinkList/WebLinkBlock/WebLinkBlock.css';

const buttonTrash = (props) => {
  return (
    <div className={classes.Button} onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave} onClick={props.mouseClick}>
      <svg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'>
        <g id='WorkPlace' fill={props.fill} fillRule='evenodd'>
          <g id='Work-Place-Condition-1-|-Start-Page' transform='translate(-561 -508)'>
            <g id='ButtonTrash' transform='translate(561 508)'>
              <rect id='Rectangle-13' fill='transparent' />
              <g id='FigureTrash' transform='translate(3 2)' stroke='#fff'>
                <path d='M1.03222561,3.5 L1.46972561,10.5 L6.53027439,10.5 L6.96777439,3.5 L1.03222561,3.5 Z'
                      id='Rectangle-7' />
                <path d='M0.5,1.5 L7.5,1.5' id='Path-8' />
                <polyline id='Path-18' points='2 1.5 3 0 5 0 6 1.5' />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default buttonTrash;