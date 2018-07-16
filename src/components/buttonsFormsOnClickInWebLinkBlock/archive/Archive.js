import React from 'react';
import classes from './Archive.css';
import formClasses from '../Form.css';

const archive = () => {
  return (
    <div className={formClasses.Form}>
      <div className={classes.TextWrapper}>
        <div>Move to archive?</div>
      </div>
      <div className={classes.ButtonWrapper}>
        <div className={classes.ButtonYes}>YES</div>
      </div>
    </div>
  );
};

export default archive;