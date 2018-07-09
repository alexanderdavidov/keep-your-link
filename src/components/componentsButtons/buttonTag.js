import React from 'react';
import classes from '../../containers/MainArea/WebLinkList/SuperWebLinkList/WebLinkBlock/WebLinkBlock.css';

const buttonTag = (props) => {
  return (
    <div className={classes.Button} onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave}>
      <svg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'>
        <g id='WorkPlace' fill="none" fillRule='evenodd'>
          <g id='Work-Place-Condition-1-|-Start-Page' transform='translate(-576 -508)'>
            <g id='ButtonTag' transform='translate(576 508)'>
              <rect id='Rectangle-13' fill='transparent' />
              <g id='FigureTag' transform='translate(2 1)' stroke='#fff' strokeWidth='0.9'>
                <polygon fill={props.fill} id='Path-6' points='4 11.5 8.46153846 7 8.46153846 3.42857143 5 3.42857143 0.5 8'
                />
                <path d='M6.5,5.14285714 C6.61439842,1.75824176 7.40927022,0.32967033 8.88461538,0.857142857 C10.3599606,1.38461538 10.7830375,2.81318681 10.1538462,5.14285714'
                      id='Path-7' />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default buttonTag;