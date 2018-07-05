import React, { Component } from 'react';

// classes
import classes from './WebLinkBlock.css';


// images
import TestImage from '../../../../../assets/images/testImage.jpeg';
import Favicon from '../../../../../assets/testImages/faviconMedium.ico';

// buttons
import ButtonArchive from '../../../../../assets/images/weblinkBlockButtons/ButtonArchive.svg';
import ButtonEdit from '../../../../../assets/images/weblinkBlockButtons/ButtonEdit.svg';
import ButtonFavorites from '../../../../../assets/images/weblinkBlockButtons/ButtonFavorites.svg';
import ButtonShare from '../../../../../assets/images/weblinkBlockButtons/ButtonShare.svg';
import ButtonTag from '../../../../../assets/images/weblinkBlockButtons/ButtonTag.svg';
import ButtonTrash from '../../../../../assets/images/weblinkBlockButtons/ButtonTrash.svg';
import ButtonUp from '../../../../../assets/images/weblinkBlockButtons/ButtonUp.svg';

class WebLinkBlock extends Component {
  render() {
    let lowBar;

    if (this.props.hover) {
      lowBar = <div className={classes.Buttons}>
        <img className={classes.Button} src={ButtonUp} alt="UpButton" />
        <img className={classes.Button} src={ButtonEdit} alt="EditButton" />
        <img className={classes.Button} src={ButtonShare} alt="ShareButton" />
        <img className={classes.Button} src={ButtonArchive} alt="ArchieveButton" />
        <img className={classes.Button} src={ButtonTrash} alt="TrashButton" />
        <img className={classes.Button} src={ButtonTag} alt="TagButton" />
        <img className={classes.Button} src={ButtonFavorites} alt="FavoritesButton" />
      </div>;
    }
    else {
      // lowBar =
    }

    return (
      <div className={classes.WebLinkBlock}>
        <img className={classes.WebLinkPicture} src={TestImage} alt="TestImage" />
        <h1>Reversed Aging, Pig Organs, and the Future of Humankind</h1>
          <div className={classes.BottomLine}>
            <div className={classes.FaviconAndDescription}>
              <img className={classes.Favicon} src={Favicon} alt="Favicon"/>
              <p className={classes.Description}>medium.com</p>
            </div>
            {lowBar}
          </div>
      </div>
    );
  }
}

export default WebLinkBlock;