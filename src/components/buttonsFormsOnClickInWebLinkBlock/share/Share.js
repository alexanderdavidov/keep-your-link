import React from 'react';
import classes from './Share.css';
import formClasses from '../Form.css';
import {
  FacebookIcon,
  TwitterIcon,
  VKIcon,
  TelegramIcon,
  WhatsappIcon,
} from 'react-share';

const share = () => {
  return (
    <div className={formClasses.Form}>
      <div className={formClasses.WrapperForHeightAndWidth}>

        <div className={formClasses.TextWrapper}>
          <div className={formClasses.MainText}>Share link?</div>
        </div>

        <div className={classes.EmailWrapper}>
          <div className={classes.Caption}>Share link within KeepYourLink?</div>
          <input autoFocus className={classes.EmailInput} type="text" placeholder="test@test.com" />
        </div>

        <div className={classes.SocialMediaWrapper}>
          <div className={classes.Caption}>Share link in social media?</div>
          <div className={classes.MediaIcon}>
            <FacebookIcon size={35} round={true} />
          </div>
          <div className={classes.MediaIcon}>
            <TwitterIcon size={35} round={true} className={classes.MediaIcon} />
          </div>
          <div className={classes.MediaIcon}>
            <VKIcon size={35} round={true} className={classes.MediaIcon} />
          </div>
          <div className={classes.MediaIcon}>
            <TelegramIcon size={35} round={true} className={classes.MediaIcon} />
          </div>
          <div className={classes.MediaIcon}>
            <WhatsappIcon size={35} round={true} className={classes.MediaIcon} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default share;