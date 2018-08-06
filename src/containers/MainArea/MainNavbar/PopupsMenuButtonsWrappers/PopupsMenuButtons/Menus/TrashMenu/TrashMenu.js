import React, { Component } from 'react';
import classes from './TrashMenu.css';


class TrashMenu extends Component {
  render() {
    return (
      <div className={classes.TrashMenu}>
        <div className={classes.InputWrapper}>
          <input autoFocus className={classes.InputElement} type="text" />
          <button className={classes.ButtonWithInput}>ADD</button>
        </div>
      </div>
    );
  }
}

export default TrashMenu;