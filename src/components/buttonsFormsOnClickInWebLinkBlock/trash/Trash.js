import React from 'react';
import classes from './Trash.css';

const trash = () => {
  return (
    <div className={classes.Trash}>
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