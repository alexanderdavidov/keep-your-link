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
    description: this.props.description
  }

  componentWillMount() {
    if (this.state.inFavorites) {
      this.setState({favoriteButtonFill: '#FFCC33'});
    }

    this.buttons = [
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

    const parentWidth = this.props.widthSize;
    const oneFourthOfParentWidth = parentWidth * 0.25;
    const weblinkBlockWidthAndPaddingTop = oneFourthOfParentWidth * 0.88;
    const weblinkBlockMargin = oneFourthOfParentWidth * 0.06;
    const weblinkBlockWidthAndPaddingTopFaded = oneFourthOfParentWidth * 0.8;
    const weblinkBlockMarginFaded = oneFourthOfParentWidth * 0.1;
    this.weblinkBlockStyleNormal = {
      width: weblinkBlockWidthAndPaddingTop,
      paddingTop: weblinkBlockWidthAndPaddingTop,
      margin: weblinkBlockMargin };
    this.weblinkBlockStyleFaded = {
      width: weblinkBlockWidthAndPaddingTopFaded,
      paddingTop: weblinkBlockWidthAndPaddingTopFaded,
      margin: weblinkBlockMarginFaded,
      opacity: '0.9' };
  }

  componentWillUpdate() {
    if (this.state.menu) {
      this.props.disableDraggable();
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
    this.setState({menu: null});
    this.props.enableDraggable();
  }

  render() {
    const webLinkBlockWrapperClasses = [classes.WebLinkBlockWrapper];
    const webLinkBlockClasses = [classes.WebLinkBlock];
    const bottomLineClasses = [classes.BottomLine];
    let weblinkBlockStyle;

    if (this.props.isDragging) {
      weblinkBlockStyle = this.weblinkBlockStyleFaded;
    }
    else{
      weblinkBlockStyle = this.weblinkBlockStyleNormal;
      webLinkBlockWrapperClasses.push(classes.hasHover);
    }

    let menuComponent = this.state.menu;
    if (menuComponent) {
      webLinkBlockClasses.push(classes.hidden);
      bottomLineClasses.push(classes.hidden);
    }

    return (
      <div className={webLinkBlockWrapperClasses.join(' ')} onMouseLeave={this.blockLeave} style={weblinkBlockStyle}>
        {menuComponent}
        <div className={webLinkBlockClasses.join(' ')}>
          <img className={classes.WebLinkPicture} src={this.props.image} alt="TestImage"/>
          <div className={classes.Description}>
            <h3>{this.state.description}</h3>
          </div>
          <div className={classes.TitleWrapper}>
            <h1>{this.props.title}</h1>
          </div>
          <div className={bottomLineClasses.join(' ')}>
            <div className={classes.Buttons}>
              {this.buttons.map((button, index) => (
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
        </div>
      </div>
    );
  }
}

export default WebLinkBlock;
