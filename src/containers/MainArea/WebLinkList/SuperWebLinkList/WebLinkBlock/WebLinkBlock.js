import React, { Component } from 'react';

// classes
import classes from './WebLinkBlock.css';


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

    let lowBar = <div className={classes.Buttons}>
        <img className={classes.Button} src={ButtonUp} alt="UpButton" />
        <img className={classes.Button} src={ButtonEdit} alt="EditButton" />
        <img className={classes.Button} src={ButtonShare} alt="ShareButton" />
        <img className={classes.Button} src={ButtonArchive} alt="ArchieveButton" />
        <img className={classes.Button} src={ButtonTrash} alt="TrashButton" />
        <img className={classes.Button} src={ButtonTag} alt="TagButton" />
        <img className={classes.Button} src={ButtonFavorites} alt="FavoritesButton" />
      </div>;

    return (
      <div className={classes.WebLinkBlock}>
        <img className={classes.WebLinkPicture} src={this.props.image} alt="TestImage" />
        <img className={classes.Favicon} src={this.props.favicon} alt="Favicon" />
        <div className={classes.TitleWrapper}>
          <h1>{this.props.title}</h1>
        </div>
        <div className={classes.BottomLine}>
          {lowBar}
        </div>
        <div className={classes.FaviconAndDescription}>
          <div className={classes.Description}>{this.props.domain}</div>
        </div>
      </div>
    );
  }
}

export default WebLinkBlock;