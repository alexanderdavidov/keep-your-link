import React, { Component } from 'react';
import classes from './NotificationsMenu.css';

// images and favicons
import TestImage1 from '../../../../../../../assets/testImages/testImage.jpeg';
import Favicon1 from '../../../../../../../assets/testImages/faviconMedium.ico';

import TestImage2 from '../../../../../../../assets/testImages/littleGirl.jpeg';
import Favicon2 from '../../../../../../../assets/testImages/apple-touch-icon-180x180.png';

import TestImage3 from '../../../../../../../assets/testImages/tj_image.jpg';
import Favicon3 from '../../../../../../../assets/testImages/favicon.ico';


class NotificationsMenu extends Component {
  render() {
    return (
      <div className={classes.NotificationsMenu}>
        <div className={classes.MainWrapper}>

        <div className={classes.SegmentWrapper}>
          <div className={classes.Title}>UPLOADED BY ME</div>
          <div className={classes.LineWebLinkBlock}>
            <img src={TestImage1} alt="TestImage1" className={classes.LineWebLinkBlockPicture} />
            <div className={classes.LineWebLinkBlockTitleAndFavicon}>
              <div className={classes.LineWebLinkBlockTitle}>Link number: 1. Some text. Some Text.</div>
              <img src={Favicon1} alt="Favicon1" className={classes.LineWebLinkBlockFavicon} />
            </div>
          </div>
          <div className={classes.LineWebLinkBlock}>
            <img src={TestImage2} alt="TestImage2" className={classes.LineWebLinkBlockPicture} />
            <div className={classes.LineWebLinkBlockTitleAndFavicon}>
              <div className={classes.LineWebLinkBlockTitle}>Link number: 1. Some text. Some Text.</div>
              <img src={Favicon2} alt="Favicon2" className={classes.LineWebLinkBlockFavicon} />
            </div>
          </div>
          <div className={classes.LineWebLinkBlock}>
            <img src={TestImage3} alt="TestImage3" className={classes.LineWebLinkBlockPicture} />
            <div className={classes.LineWebLinkBlockTitleAndFavicon}>
              <div className={classes.LineWebLinkBlockTitle}>Link number: 1. Some text. Some Text.</div>
              <img src={Favicon3} alt="Favicon3" className={classes.LineWebLinkBlockFavicon} />
            </div>
          </div>
        </div>

        <div className={classes.SegmentWrapper}>
          <div className={classes.Title}>FROM USERS</div>
          <div className={classes.LineWebLinkBlock}>
            <img src={TestImage1} alt="TestImage1" className={classes.LineWebLinkBlockPicture} />
            <div className={classes.LineWebLinkBlockTitleAndFavicon}>
              <div className={classes.LineWebLinkBlockTitle}>Link number: 1. Some text. Some Text.</div>
              <img src={Favicon1} alt="Favicon1" className={classes.LineWebLinkBlockFavicon} />
            </div>
          </div>
          <div className={classes.LineWebLinkBlock}>
            <img src={TestImage2} alt="TestImage2" className={classes.LineWebLinkBlockPicture} />
            <div className={classes.LineWebLinkBlockTitleAndFavicon}>
              <div className={classes.LineWebLinkBlockTitle}>Link number: 1. Some text. Some Text.</div>
              <img src={Favicon2} alt="Favicon2" className={classes.LineWebLinkBlockFavicon} />
            </div>
          </div>
          <div className={classes.LineWebLinkBlock}>
            <img src={TestImage3} alt="TestImage3" className={classes.LineWebLinkBlockPicture} />
            <div className={classes.LineWebLinkBlockTitleAndFavicon}>
              <div className={classes.LineWebLinkBlockTitle}>Link number: 1. Some text. Some Text.</div>
              <img src={Favicon3} alt="Favicon3" className={classes.LineWebLinkBlockFavicon} />
            </div>
          </div>
        </div>


        <div className={classes.ClearButtonWrapper}>
          <button className={classes.ClearButton}>CLEAR</button>
        </div>

        </div>
      </div>
    );
  }
}

export default NotificationsMenu;