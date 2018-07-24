import React, { Component } from 'react';
import classes from './PlusMenu.css';


class Plus extends Component {
  render() {
    return (
      <div className={classes.PlusMenu}>
        <div className={classes.InputWrapper}>
          <input autoFocus className={classes.InputElement} type="text" />
          <div className={classes.ButtonWithInput}><div>ADD</div></div>
        </div>
      </div>
    );
  }
}

export default Plus;