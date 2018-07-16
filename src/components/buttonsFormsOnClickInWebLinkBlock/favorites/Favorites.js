import React from 'react';
import classes from './Favorites.css';
import formClasses from '../Form.css';

const favorites = () => {
  return (
    <div className={formClasses.Form}>
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