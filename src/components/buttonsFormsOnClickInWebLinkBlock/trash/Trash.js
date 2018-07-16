import React from 'react';
import classes from './Trash.css';
import formClasses from '../Form.css';

const trash = () => {
  return (
    <div className={formClasses.Form}>
      <div className={classes.TextWrapper}>
        <div>Move to trash?</div>
        <div>Auto deleting after 5 days</div>
      </div>
      <div className={classes.ButtonWrapper}>
        <div className={classes.ButtonYes}>YES</div>
      </div>
    </div>
  );
};

export default trash;