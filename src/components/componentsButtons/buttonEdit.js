import React from 'react';
import classes from '../../containers/MainArea/WebLinkList/SuperWebLinkList/WebLinkBlock/WebLinkBlock.css';


const buttonEdit = (props) => {
  return (
    <div className={classes.Button} onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave} onClick={props.mouseClick}>
      <svg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'>
        <g id='WorkPlace' fill={props.fill} fillRule='evenodd'>
          <g id='Work-Place-Condition-1-|-Start-Page' transform='translate(-516 -508)'>
            <g id='ButtonEdit' transform='translate(516 508)'>
              <rect id='Rectangle-13' fill='transparent' />
              <g id='Edit' transform='rotate(-136 4.772 6.14)' stroke='#fff'>
                <path d='M2.48665225,0.996563558 L0.582114187,3.1977906 C0.573309115,3.20796733 0.568463155,3.22097447 0.568463155,3.23443163 L0.568463155,12.3114163 C0.568463155,12.466056 0.693823425,12.5914163 0.848463155,12.5914163 L4.55637443,12.5914163 C4.71101416,12.5914163 4.83637443,12.466056 4.83637443,12.3114163 C4.83637443,12.3105884 4.83637076,12.3097605 4.83636342,12.3089326 L4.75585677,3.23354463 C4.75574217,3.22062571 4.75116421,3.20814379 4.74289877,3.19821434 L2.91359604,1.00063352 C2.81466242,0.881782422 2.63811301,0.86563612 2.51926192,0.964569746 C2.50753872,0.974328324 2.49663255,0.985028533 2.48665225,0.996563558 Z'
                      id='Path-15' />
                <path d='M0.325742017,9.47475793 L4.91331693,9.47475793' id='Path-16'
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default buttonEdit;

