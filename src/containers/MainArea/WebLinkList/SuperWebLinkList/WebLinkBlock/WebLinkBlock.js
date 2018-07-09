import React, { Component } from 'react';
import { Animated } from "react-animated-css";

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

class WebLinkBlock extends Component {
  state = {
    archiveButtonFill: 'transparent',
    editButtonFill: 'none',
    favoriteButtonFill: 'none',
    shareButtonFill: 'none',
    tagButtonFill: 'none',
    trashButtonFill: 'none',
    upButtonFill: 'none'
  }

  //region  buttons hover handlers
  archiveButtonEnter = () => {
    this.setState({archiveButtonFill: '#ffffff'});
  };

  archiveButtonLeave = () => {
    this.setState({archiveButtonFill: 'transparent'});
  };

  editButtonEnter = () => {
    this.setState({editButtonFill: '#ffffff'});
  }

  editButtonLeave = () => {
    this.setState({editButtonFill: 'none'});
  }

  favoriteButtonEnter = () => {
    this.setState({favoriteButtonFill: '#ffffff'});
  }

  favoriteButtonLeave = () => {
    this.setState({favoriteButtonFill: 'none'});
  }

  shareButtonEnter = () => {
    this.setState({shareButtonFill: '#ffffff'});
  }

  shareButtonLeave = () => {
    this.setState({shareButtonFill: 'none'});
  }

  tagButtonEnter = () => {
    this.setState({tagButtonFill: '#ffffff'});
  }

  tagButtonLeave = () => {
    this.setState({tagButtonFill: 'none'});
  }

  trashButtonEnter = () => {
    this.setState({trashButtonFill: '#ffffff'});
  }

  trashButtonLeave = () => {
    this.setState({trashButtonFill: 'none'});
  }

  upButtonEnter = () => {
    this.setState({upButtonFill: '#ffffff'});
  }

  upButtonLeave = () => {
    this.setState({upButtonFill: 'none'});
  }

  //endregion

  render() {

    let lowBar = <div className={classes.Buttons}>
        <ButtonShare fill={this.state.shareButtonFill} mouseEnter={this.shareButtonEnter} mouseLeave={this.shareButtonLeave} />
        <ButtonEdit fill={this.state.editButtonFill} mouseEnter={this.editButtonEnter} mouseLeave={this.editButtonLeave} />
        <ButtonUp fill={this.state.upButtonFill} mouseEnter={this.upButtonEnter} mouseLeave={this.upButtonLeave} />
        <ButtonTag fill={this.state.tagButtonFill} mouseEnter={this.tagButtonEnter} mouseLeave={this.tagButtonLeave} />
        <ButtonFavorites fill={this.state.favoriteButtonFill} mouseEnter={this.favoriteButtonEnter} mouseLeave={this.favoriteButtonLeave} />
        <ButtonArchive fill={this.state.archiveButtonFill} mouseEnter={this.archiveButtonEnter} mouseLeave={this.archiveButtonLeave} />
        <ButtonTrash fill={this.state.trashButtonFill} mouseEnter={this.trashButtonEnter} mouseLeave={this.trashButtonLeave} />
      </div>;


    return (
      <div className={classes.WebLinkBlock}>
        <img className={classes.WebLinkPicture} src={this.props.image} alt="TestImage" />
        <img className={classes.Favicon} src={this.props.favicon} alt="Favicon" />
        <div className={classes.Description}><h3>{this.props.description}</h3></div>
        <div className={classes.TitleWrapper}>
          <h1>{this.props.title}</h1>
        </div>
        <div className={classes.BottomLine}>
          <Animated animationIn="fadeInUp">
            {lowBar}
          </Animated>
        </div>
        <div className={classes.DomainWrapper}>
          <div className={classes.Domain}>{this.props.domain}</div>
        </div>
      </div>
    );
  }
}

export default WebLinkBlock;