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
    favoriteButtonFill: 'none',
    shareButtonFill: 'none',
    tagButtonFill: 'none',
    trashButtonFill: 'none',
    upButtonFill: 'none',
    inFavorites: true,
    description: this.props.description,
    menu: null,
  }

  componentWillMount() {
    if (this.state.inFavorites) {
      this.setState({favoriteButtonFill: '#FFCC33'});
    }
  }

  //region buttons hover handlers

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
    let favoriteButtonFill;
    if (this.state.inFavorites) {
      favoriteButtonFill = 'none';
    } else {
      favoriteButtonFill = '#FFCC33';
    }
    this.setState({favoriteButtonFill: favoriteButtonFill, description: 'Favorite'});
  }

  favoriteButtonLeave = () => {
    let favoriteButtonFill;
    if (this.state.inFavorites) {
      favoriteButtonFill = '#FFCC33';
    } else {
      favoriteButtonFill = 'none';
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


  //endregion

  // blockLeave
  blockLeave = () => {
    this.props.enableDraggable();
    this.setState({menu: null});
  }

  render() {
    const buttons = [
      <ButtonShare
        fill={this.state.shareButtonFill}
        mouseEnter={this.shareButtonEnter}
        mouseLeave={this.shareButtonLeave}
        mouseClick={this.shareButtonClick} />,
      <ButtonEdit
        fill={this.state.editButtonFill}
        mouseEnter={this.editButtonEnter}
        mouseLeave={this.editButtonLeave}
        mouseClick={this.editButtonClick} />,
      <ButtonUp
        fill={this.state.upButtonFill}
        mouseEnter={this.upButtonEnter}
        mouseLeave={this.upButtonLeave}
        mouseClick={this.upButtonClick} />,
      <ButtonTag
        fill={this.state.tagButtonFill}
        mouseEnter={this.tagButtonEnter}
        mouseLeave={this.tagButtonLeave}
        mouseClick={this.tagButtonClick} />,
      <ButtonFavorites
        fill={this.state.favoriteButtonFill}
        mouseEnter={this.favoriteButtonEnter}
        mouseLeave={this.favoriteButtonLeave}
        mouseClick={this.favoriteButtonClick} />,
      <ButtonArchive
        fill={this.state.archiveButtonFill}
        mouseEnter={this.archiveButtonEnter}
        mouseLeave={this.archiveButtonLeave}
        mouseClick={this.archiveButtonClick} />,
      <ButtonTrash
        fill={this.state.trashButtonFill}
        mouseEnter={this.trashButtonEnter}
        mouseLeave={this.trashButtonLeave}
        mouseClick={this.trashButtonClick} />
    ];


    let parentWidth = this.props.widthSize;
    let oneFourthOfParentWidth = parentWidth * 0.25;
    let weblinkBlockWidthAndPaddingTop = oneFourthOfParentWidth * 0.9;
    let weblinkBlockMargin = oneFourthOfParentWidth * 0.05;
    let weblinkBlockWidthAndPaddingTopFaded = oneFourthOfParentWidth * 0.86;
    let weblinkBlockMarginFaded = oneFourthOfParentWidth * 0.07;
    let weblinkBlockStyle = {
                            width: weblinkBlockWidthAndPaddingTop,
                            paddingTop: weblinkBlockWidthAndPaddingTop,
                            margin: weblinkBlockMargin};
    let weblinkBlockStyleFaded = {
                            width: weblinkBlockWidthAndPaddingTopFaded,
                            paddingTop: weblinkBlockWidthAndPaddingTopFaded,
                            margin: weblinkBlockMarginFaded};

    // const webLinkBlockClasses = [classes.WebLinkBlock];
    const buttomLineClasses = [classes.BottomLine];
    const webLinkBlockWrapperClasses = [classes.WebLinkBlockWrapper];
    let menuComponent;
    (this.props.isDragging) ? weblinkBlockStyle = weblinkBlockStyleFaded : webLinkBlockWrapperClasses.push(classes.hasHover);
    if (this.state.menu) {
      menuComponent = this.state.menu;
      // webLinkBlockClasses.push(classes.hidden);
      buttomLineClasses.push(classes.hidden);
      this.props.disableDraggable();
    }

    return (
      <div className={webLinkBlockWrapperClasses.join(' ')}
           style={weblinkBlockStyle}
           onMouseLeave={this.blockLeave}>
        {menuComponent}
        {/*<div className={webLinkBlockClasses.join(' ')}>*/}
          <img className={classes.WebLinkPicture} src={this.props.image} alt="TestImage"/>
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
                  onMouseLeave={this.props.enableDraggable} >
                  {button}
                </div>
              ))}
            </div>
          </div>
          <div className={classes.Domain}>{this.props.domain}</div>
          <img className={classes.Favicon} src={this.props.favicon} alt="Favicon"/>
        {/*</div>*/}
      </div>
    );
  }
}

export default WebLinkBlock;
