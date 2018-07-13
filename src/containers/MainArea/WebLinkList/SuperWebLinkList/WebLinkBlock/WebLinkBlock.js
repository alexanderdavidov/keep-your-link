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


class WebLinkBlock extends Component {
  state = {
    archiveButtonFill: 'transparent',
    editButtonFill: 'none',
    favoriteButtonFill: 'none',
    shareButtonFill: 'none',
    tagButtonFill: 'none',
    trashButtonFill: 'none',
    upButtonFill: 'none',
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
    this.setState({archiveButtonFill: '#ffffff', menu: <Archive/>});
  }

  // editButton
  editButtonEnter = () => {
    this.setState({editButtonFill: '#ffffff', description: 'Edit'});
  }

  editButtonLeave = () => {
    this.setState({editButtonFill: 'none', description: `${this.props.description}`});
  }

  // favoriteButton
  favoriteButtonEnter = () => {
    this.setState({favoriteButtonFill: '#ffffff', description: 'Favorite'});
  }

  favoriteButtonLeave = () => {
    this.setState({favoriteButtonFill: 'none', description: `${this.props.description}`});
  }

  favoriteButtonClick = () => {
    this.setState({favoriteButtonFill: '#ffffff', menu: <Favorites/>});
  }

  // shareButton
  shareButtonEnter = () => {
    this.setState({shareButtonFill: '#ffffff', description: 'Share'});
  }

  shareButtonLeave = () => {
    this.setState({shareButtonFill: 'none', description: `${this.props.description}`});
  }

  // tagButton
  tagButtonEnter = () => {
    this.setState({tagButtonFill: '#ffffff', description: 'Tag'});
  }

  tagButtonLeave = () => {
    this.setState({tagButtonFill: 'none', description: `${this.props.description}`});
  }

  tagButtonClick = () => {
    this.setState({tagButtonFill: '#ffffff', menu: <Tags/>});
  }

  // trashButton
  trashButtonEnter = () => {
    this.setState({trashButtonFill: '#ffffff', description: 'Trash'});
  }

  trashButtonLeave = () => {
    this.setState({trashButtonFill: 'none', description: `${this.props.description}`});
  }

  trashButtonClick = () => {
    this.setState({trashButtonFill: '#ffffff', menu: <Trash/>});
  }

  // upButton
  upButtonEnter = () => {
    this.setState({upButtonFill: '#ffffff', description: 'Change List'});
  }

  upButtonLeave = () => {
    this.setState({upButtonFill: 'none', description: `${this.props.description}`});
  }

  blockLeave = () => {
    this.setState({menu: null});
  }

  //endregion

  render() {
    const buttons = [
      <ButtonShare
        fill={this.state.shareButtonFill}
        mouseEnter={this.shareButtonEnter}
        mouseLeave={this.shareButtonLeave}/>,
      <ButtonEdit
        fill={this.state.editButtonFill}
        mouseEnter={this.editButtonEnter}
        mouseLeave={this.editButtonLeave}/>,
      <ButtonUp
        fill={this.state.upButtonFill}
        mouseEnter={this.upButtonEnter}
        mouseLeave={this.upButtonLeave}/>,
      <ButtonTag
        fill={this.state.tagButtonFill}
        mouseEnter={this.tagButtonEnter}
        mouseLeave={this.tagButtonLeave}
        mouseClick={this.tagButtonClick}/>,
      <ButtonFavorites
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
    }

    return (
      <div className={webLinkBlockWrapperClasses.join(' ')}>
        {menuComponent}
        <div className={webLinkBlockClasses.join(' ')} onMouseLeave={this.blockLeave}>
          <img className={classes.WebLinkPicture} src={this.props.image} alt="TestImage"/>
          <img className={classes.Favicon} src={this.props.favicon} alt="Favicon"/>
          <div className={classes.Description}>
            <h3>{this.state.description}</h3>
          </div>
          <div className={classes.TitleWrapper}>
            <h1>{this.props.title}</h1>
          </div>
          <div className={classes.BottomLine}>
            <div className={classes.Buttons}>
              {buttons.map((button, index) => (
                <div
                  key={index}
                  onMouseDownCapture={this.props.buttonSelected}
                  onMouseLeave={this.props.buttonUnselected}
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
