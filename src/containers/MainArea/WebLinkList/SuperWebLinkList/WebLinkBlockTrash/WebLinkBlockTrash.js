import React, { Component } from 'react';
import { Animated } from "react-animated-css";

import classes from '../WebLinkBlock/WebLinkBlock.css';


class WebLinkBlockTrash extends Component {
  render() {
    return (
      <div className={classes.WebLinkBlock}>
        <img className={classes.WebLinkPictureTrash} src={this.props.image} alt="TestImage" />
        <div className={classes.TrashDescription}>
          <div className={classes.TrashDescriptionTwo}>
            <Animated animationIn="fadeInUp">
              <p className={classes.ListName}>{this.props.listName}</p>
              <p className={classes.DaysQuantity}>{this.props.daysQuantity}</p>
              <p className={classes.BeforeDeleted}>before deleted</p>
            </Animated>
          </div>
        </div>
        <div className={classes.TitleWrapper}>
          <h1>{this.props.title}</h1>
        </div>
        <div className={classes.DomainWrapper}>
          <div className={classes.Domain}>{this.props.domain}</div>
        </div>
      </div>
    );
  }
}

export default WebLinkBlockTrash;