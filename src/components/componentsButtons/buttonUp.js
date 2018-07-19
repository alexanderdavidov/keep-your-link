import React from 'react';
import classes from '../../containers/MainArea/WebLinkList/SuperWebLinkList/WebLinkBlock/WebLinkBlock.css';

const buttonTag = (props) => {
  return (
    <div className={classes.Button} onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave} onClick={props.mouseClick}>
      <svg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'>
        <g id='WorkPlace' fill={props.fill} fillRule='evenodd'>
          <g id='Work-Place-Condition-1-|-Start-Page' transform='translate(-501 -508)'>
            <g id='ButtonUp' transform='translate(501 508)'>
              <rect id='Rectangle-13' fill='transparent' />
              <path d='M6.82995389,1.04454061 L6.805148,1.08174944 L3.0168056,6.76426304 C2.98617035,6.81021591 2.99858774,6.87230285 3.04454061,6.90293809 C3.06096736,6.91388926 3.08026813,6.91973306 3.10001063,6.91973306 L5.31315892,6.91973306 C5.36838739,6.91973306 5.41315892,6.96450459 5.41315892,7.01973306 L5.41315892,12.8197331 C5.41315892,12.8749615 5.45793044,12.9197331 5.51315892,12.9197331 C5.97982558,12.9197331 6.44649225,12.9197331 6.91315892,12.9197331 C7.37982558,12.9197331 7.84649225,12.9197331 8.31315892,12.9197331 L8.31315892,12.9197331 C8.36838739,12.9197331 8.41315892,12.8749615 8.41315892,12.8197331 L8.41315892,7.01973306 C8.41315892,6.96450459 8.45793044,6.91973306 8.51315892,6.91973306 L10.7263072,6.91973306 C10.7815357,6.91973306 10.8263072,6.87496154 10.8263072,6.81973306 C10.8263072,6.79999057 10.8204634,6.7806898 10.8095122,6.76426304 L6.99636395,1.04454061 C6.9657287,0.998587739 6.90364177,0.986170352 6.8576889,1.0168056 C6.84670367,1.02412908 6.83727737,1.03355538 6.82995389,1.04454061 Z'
                    id='Path-17' stroke='#fff' />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default buttonTag;