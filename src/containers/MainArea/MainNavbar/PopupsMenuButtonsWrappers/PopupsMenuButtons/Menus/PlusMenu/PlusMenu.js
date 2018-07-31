import React, { Component } from 'react';
import classes from './PlusMenu.css';


class PlusMenu extends Component {
  render() {
    return (
      <div className={classes.PlusMenu}>
        <div className={classes.InputWrapper}>
          <input autoFocus className={classes.InputElement} type="text" />
          <button className={classes.ButtonWithInput}>ADD</button>
        </div>
      </div>
    );
  }
}

export default PlusMenu;