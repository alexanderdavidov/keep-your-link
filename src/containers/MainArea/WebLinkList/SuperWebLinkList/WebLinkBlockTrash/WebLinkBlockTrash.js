import React, { Component } from 'react';

import classes from '../WebLinkBlock/WebLinkBlock.css';

import { Animated } from 'react-animated-css';

// images
import BackButton from '../../../../../components/componentsButtons/buttonBack'
import DeleteButton from '../../../../../components/componentsButtons/buttonDelete'


class WebLinkBlockTrash extends Component {
  state = {
    backButtonFill: 'none',
    deleteButtonFill: 'none',
    buttonDescr: null
  }

  backButtonEnter = () => {
    let buttonDescr = <div className={classes.Description}>
      <Animated animationIn="fadeInLeft"><h3>Return link from trash</h3></Animated>
    </div>;

    this.setState({backButtonFill: '#ffffff', buttonDescr: buttonDescr});
  };

  backButtonLeave = () => {
    this.setState({backButtonFill: 'none', buttonDescr: null});
  };

  deleteButtonEnter = () => {
    let buttonDescr = <div className={classes.Description}>
      <Animated animationIn="fadeInRight"><h3>Delete link permanently</h3></Animated>
    </div>;

    this.setState({deleteButtonFill: '#ffffff', buttonDescr: buttonDescr});
  }

  deleteButtonLeave = () => {
    this.setState({deleteButtonFill: 'none', buttonDescr: null});
  }

  render() {
    let listNameStyle;
    if (this.props.listType === 'private') {
      listNameStyle = {color: "#90C557"};
    } else if (this.props.listType === 'public') {
      listNameStyle = {color: "#d0021b"};
    } else {
      listNameStyle = {color: "#ffffff"};
    }


    return (
      <div className={classes.WebLinkBlockWrapper}>

        <div className={classes.WebLinkBlock}>
          <img className={classes.WebLinkPictureTrash} src={this.props.image} alt="TestImage"/>
          <div className={classes.TrashDescription}>
            <div className={classes.TrashDescriptionWrapper}>
              <p className={classes.ListName} style={listNameStyle}>{this.props.listName}</p>
              <p className={classes.DaysQuantity}>{this.props.daysQuantity}</p>
              <p className={classes.BeforeDeleted}>before deleted</p>
            </div>
          </div>
          {this.state.buttonDescr}
          <div className={classes.TrashButtonWrapper}>
            <div className={classes.TrashButtons}>
              <BackButton fill={this.state.backButtonFill} mouseEnter={this.backButtonEnter}
                          mouseLeave={this.backButtonLeave}/>
              <DeleteButton fill={this.state.deleteButtonFill} mouseEnter={this.deleteButtonEnter}
                            mouseLeave={this.deleteButtonLeave}/>
            </div>
          </div>
          <div className={classes.TitleWrapper}>
            <h1>{this.props.title}</h1>
          </div>
          <div className={classes.DomainWrapper}>
            <div className={classes.Domain}>{this.props.domain}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebLinkBlockTrash;