import React from 'react';
import classes from '../../containers/MainArea/WebLinkList/SuperWebLinkList/WebLinkBlock/WebLinkBlock.css';

const buttonFavorites = (props) => {
  return (
    <div className={classes.Button} onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave} onClick={props.mouseClick}>
      <svg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'>
        <g id='WorkPlace' fill={props.fill} fillRule='evenodd'>
          <g id='Work-Place-Condition-1-|-Start-Page' transform='translate(-591 -508)'>
            <g id='ButtonFavorites' transform='translate(591 508)'>
              <rect id='Rectangle-13' fill='transparent' />
              <g id='Favorites' transform='translate(2 2)' stroke="#FFCC33">
                <polygon id='Star' points='5.35824885 8.45099439 2.04666894 10.191995 2.67912443 6.50449655 -3.1918912e-14 3.89299567 3.7024589 3.3549969 5.35824885 0 7.01403881 3.3549969 10.7164977 3.89299567 8.03737328 6.50449655 8.66982877 10.191995'
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default buttonFavorites;