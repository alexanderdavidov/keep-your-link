import React, { Component } from 'react';
import classes from './NotificationsMenu.css';

// images
import TestImage1 from '../../../../../../../assets/testImages/testImage.jpeg';
import TestImage2 from '../../../../../../../assets/testImages/littleGirl.jpeg';
import TestImage3 from '../../../../../../../assets/testImages/tj_image.jpg';


class NotificationsMenu extends Component {
  render() {
    return (
      <div className={classes.NotificationsMenu}>
        <div className={classes.MainWrapper}>
          <div className={classes.MainWrapperListsBlocks}>

            <div className={classes.UploadedByMe}>
              <div className={classes.ListTitle}>UPLOADED BY ME</div>
              <div className={classes.LineWebLinkBlock}>
                <img className={classes.ImageLineWebLinkBlockPicture} src={TestImage1} alt="TestImage1" />
                <div className={classes.TitleLineWebLinkBlock}><h3 className={classes.Text}>SomeTextSomeTextSomeText</h3></div>
              </div>
              <div className={classes.LineWebLinkBlock}>
                <img className={classes.ImageLineWebLinkBlockPicture} src={TestImage2} alt="TestImage2" />
                <div className={classes.TitleLineWebLinkBlock}><h3 className={classes.Text}>SomeTextSomeTextSomeText</h3></div>
              </div>
              <div className={classes.LineWebLinkBlock}>
                <img className={classes.ImageLineWebLinkBlockPicture} src={TestImage3} alt="TestImage3" />
                <div className={classes.TitleLineWebLinkBlock}><h3 className={classes.Text}>SomeTextSomeTextSomeText</h3></div>
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