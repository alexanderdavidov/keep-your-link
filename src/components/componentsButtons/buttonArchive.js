import React from 'react';

import classes from '../../containers/MainArea/WebLinkList/SuperWebLinkList/WebLinkBlock/WebLinkBlock.css';


const buttonArchive = (props) => {
  return (
    <div className={classes.Button} onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave} onClick={props.mouseClick}>
      <svg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'>
        <g id='WorkPlace' fill={props.fill} fillRule='evenodd'>
          <g id='Work-Place-Condition-1-|-Start-Page' transform='translate(-546 -508)'>
            <g id='ButtonArchive' transform='translate(546 508)'>
              <rect id='Rectangle-13' fill='#ffffff' />
              <g id='Archive' transform='translate(3 2)' stroke='#ffffff'>
                <path d='M1,0.5 C0.723857625,0.5 0.5,0.723857625 0.5,1 L0.5,9.9810216 C0.5,10.0890623 0.53499547,10.1941966 0.599746943,10.2806839 C0.765245858,10.5017376 1.07860863,10.5467736 1.29966229,10.3812747 L3.40067541,8.80828377 C3.75595551,8.54229192 4.24404449,8.54229192 4.59932459,8.80828377 L6.70033771,10.3812747 C6.78682498,10.4460261 6.89195926,10.4810216 7,10.4810216 C7.27614237,10.4810216 7.5,10.257164 7.5,9.9810216 L7.5,1 C7.5,0.723857625 7.27614237,0.5 7,0.5 L1,0.5 Z'
                      id='Rectangle-8' />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default buttonArchive;

