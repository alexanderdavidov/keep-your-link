import React, {Component} from 'react';

// classes
import classes from './WebLinkBlock.css';

// buttons
import ButtonArchive from '../../../../../components/componentsButtons/buttonArchive';
import ButtonEdit from '../../../../../components/componentsButtons/buttonEdit';
import ButtonFavorites from '../../../../../components/componentsButtons/buttonFavorites';
import ButtonShare from '../../../../../components/componentsButtons/buttonShare';
import ButtonTag from '../../../../../components/componentsButtons/buttonTag';
import ButtonTrash from '../../../../../components/componentsButtons/buttonTrash';
import ButtonUp from '../../../../../components/componentsButtons/buttonUp';

// forms
import Trash from '../../../../../components/buttonsFormsOnClickInWebLinkBlock/trash/Trash';
import Archive from '../../../../../components/buttonsFormsOnClickInWebLinkBlock/archive/Archive';
import Favorites from '../../../../../components/buttonsFormsOnClickInWebLinkBlock/favorites/Favorites';
import Tags from '../../../../../components/buttonsFormsOnClickInWebLinkBlock/tags/Tags';
import MoveFromOneListToAnother from '../../../../../components/buttonsFormsOnClickInWebLinkBlock/moveFromOneListToAnother/MoveFromOneListToAnother';
import Edit from '../../../../../components/buttonsFormsOnClickInWebLinkBlock/edit/Edit';
import Share from '../../../../../components/buttonsFormsOnClickInWebLinkBlock/share/Share';

class WebLinkBlock extends Component {
  state = {
    archiveButtonFill: 'transparent',
    editButtonFill: 'none',
    favoriteButtonFill: '#FFCC33',
    shareButtonFill: 'none',
    tagButtonFill: 'none',
    trashButtonFill: 'none',
    upButtonFill: 'none',
    inFavorites: true
  }

  //region  buttons hover handlers

  // archiveButton
  archiveButtonEnter = () => {
    this.setState({archiveButtonFill: '#ffffff', description: 'Archive'});
  };

  archiveButtonLeave = () => {
    this.setState({archiveButtonFill: 'transparent', description: `${this.props.description}`});
  };

  archiveButtonClick = () => {
    this.setState({archiveButtonFill: '#ffffff', menu: <Archive />});
  }

  // editButton
  editButtonEnter = () => {
    this.setState({editButtonFill: '#ffffff', description: 'Edit'});
  }

  editButtonLeave = () => {
    this.setState({editButtonFill: 'none', description: `${this.props.description}`});
  }

  editButtonClick = () => {
    this.setState({editButtonFill: '#ffffff', menu: <Edit />});
  }

  // favoriteButton
  favoriteButtonEnter = () => {
    this.setState({favoriteButtonFill: 'none', description: 'Favorite'});
  }

  favoriteButtonLeave = () => {
    let favoriteButtonFill;
    if (this.state.inFavorites) {
      favoriteButtonFill = '#FFCC33';
    } else {
      favoriteButtonFill = '#FFFFFF';
    }
    this.setState({favoriteButtonFill: favoriteButtonFill, description: `${this.props.description}`});
  }

  favoriteButtonClick = () => {
    this.setState({favoriteButtonFill: 'none', menu: <Favorites inFavorites={this.state.inFavorites} />});
  }

  // shareButton
  shareButtonEnter = () => {
    this.setState({shareButtonFill: '#ffffff', description: 'Share'});
  }

  shareButtonLeave = () => {
    this.setState({shareButtonFill: 'none', description: `${this.props.description}`});
  }

  shareButtonClick = () => {
    this.setState({shareButtonFill: '#ffffff', menu: <Share /> });
  }

  // tagButton
  tagButtonEnter = () => {
    this.setState({tagButtonFill: '#ffffff', description: 'Tag'});
  }

  tagButtonLeave = () => {
    this.setState({tagButtonFill: 'none', description: `${this.props.description}`});
  }

  tagButtonClick = () => {
    this.setState({tagButtonFill: '#ffffff', menu: <Tags />});
  }

  // trashButton
  trashButtonEnter = () => {
    this.setState({trashButtonFill: '#ffffff', description: 'Trash'});
  }

  trashButtonLeave = () => {
    this.setState({trashButtonFill: 'none', description: `${this.props.description}`});
  }

  trashButtonClick = () => {
    this.setState({trashButtonFill: '#ffffff', menu: <Trash />});
  }

  // upButton
  upButtonEnter = () => {
    this.setState({upButtonFill: '#ffffff', description: 'Change List'});
  }

  upButtonLeave = () => {
    this.setState({upButtonFill: 'none', description: `${this.props.description}`});
  }

  upButtonClick = () => {
    this.setState({upButtonFill: '#ffffff', menu: <MoveFromOneListToAnother />});
  }


  // blockLeave

  blockLeave = () => {
    this.setState({menu: null});
    this.props.enableDraggable();
  }

  //endregion

  render() {
    let strokeFavorites;
    if (this.state.inFavorites) {
      strokeFavorites = '#FFCC33';
    } else {
      strokeFavorites = '#FFFFFF';
    }
    const buttons = [
      <ButtonShare
        fill={this.state.shareButtonFill}
        mouseEnter={this.shareButtonEnter}
        mouseLeave={this.shareButtonLeave}
        mouseClick={this.shareButtonClick}/>,
      <ButtonEdit
        fill={this.state.editButtonFill}
        mouseEnter={this.editButtonEnter}
        mouseLeave={this.editButtonLeave}
        mouseClick={this.editButtonClick}/>,
      <ButtonUp
        fill={this.state.upButtonFill}
        mouseEnter={this.upButtonEnter}
        mouseLeave={this.upButtonLeave}
        mouseClick={this.upButtonClick}/>,
      <ButtonTag
        fill={this.state.tagButtonFill}
        mouseEnter={this.tagButtonEnter}
        mouseLeave={this.tagButtonLeave}
        mouseClick={this.tagButtonClick}/>,
      <ButtonFavorites
        stroke={strokeFavorites}
        fill={this.state.favoriteButtonFill}
        mouseEnter={this.favoriteButtonEnter}
        mouseLeave={this.favoriteButtonLeave}
        mouseClick={this.favoriteButtonClick}/>,
      <ButtonArchive
        fill={this.state.archiveButtonFill}
        mouseEnter={this.archiveButtonEnter}
        mouseLeave={this.archiveButtonLeave}
        mouseClick={this.archiveButtonClick}/>,
      <ButtonTrash
        fill={this.state.trashButtonFill}
        mouseEnter={this.trashButtonEnter}
        mouseLeave={this.trashButtonLeave}
        mouseClick={this.trashButtonClick}/>
    ];

    const webLinkBlockClasses = [classes.WebLinkBlock];
    const buttomLineClasses = [classes.BottomLine];
    const webLinkBlockWrapperClasses = [classes.WebLinkBlockWrapper];
    if (this.props.isDragging) {
      webLinkBlockWrapperClasses.push(classes.faded);
    }
    else {
      webLinkBlockClasses.push(classes.hasHover);
    }


    let menuComponent;
    if (this.state.menu) {
      menuComponent = this.state.menu;
      webLinkBlockClasses.push(classes.hidden);
      buttomLineClasses.push(classes.hidden);
      this.props.disableDraggable();
    }

    console.log(buttomLineClasses.join(' '));

    return (
      <div className={webLinkBlockWrapperClasses.join(' ')} onMouseLeave={this.blockLeave}>
        {menuComponent}
        <div className={webLinkBlockClasses.join(' ')}>
          <img className={classes.WebLinkPicture} src={this.props.image} alt="TestImage"/>
          <img className={classes.Favicon} src={this.props.favicon} alt="Favicon"/>
          <div className={classes.Description}>
            <h3>{this.state.description}</h3>
          </div>
          <div className={classes.TitleWrapper}>
            <h1>{this.props.title}</h1>
          </div>
          <div className={buttomLineClasses.join(' ')}>
            <div className={classes.Buttons}>
              {buttons.map((button, index) => (
                <div
                  key={index}
                  onMouseDownCapture={this.props.disableDraggable}
                  onMouseLeave={this.props.enableDraggable}
                >
                  {button}
                </div>
              ))}
            </div>
          </div>
          <div className={classes.Domain}>{this.props.domain}</div>
        </div>
      </div>
    );
  }
}

export default WebLinkBlock;
