import React from 'react';
import classes from './Favorites.css';

const favorites = () => {
  return (
    <div className={classes.Favorites}>
      <div className={classes.TextWrapper}>
        <div>Added to favorites?</div>
      </div>
      <div className={classes.ButtonWrapper}>
        <div className={classes.ButtonYes}>YES</div>
      </div>
    </div>
  );
};

export default favorites;