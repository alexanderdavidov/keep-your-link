import React from 'react';
import classes from './Archive.css';

const archive = () => {
  return (
    <div className={classes.Archive}>
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