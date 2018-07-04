import React, { Component } from 'react';

// classes
import classes from './WebLinkBlock.css';


// images
import TestImage from '../../../../../assets/images/testImage.jpeg';
import TestImageTwo from '../../../../../assets/images/imageTestTwo.jpeg';

class WebLinkBlock extends Component {
  render() {
    return (
      <div className={classes.WebLinkBlock}>
        <img src={TestImage} alt="TestImage" />
        {/*<img src={TestImageTwo} alt="TestImage"/>*/}
        <h1>Reversed Aging, Pig Organs, and the Future of Humankind</h1>
      </div>
    );
  }
}

export default WebLinkBlock;