import React from 'react';
import formClasses from '../Form.css';

const favorites = (props) => {
  let message;
  if (props.inFavorites) {
    message = <div className={formClasses.MainText}>Remove from favorites?</div>;
  } else {
    message = <div className={formClasses.MainText}>Add to favorites?</div>;
  }
  return (
    <div className={formClasses.Form}>
      <div className={formClasses.TextWrapper}>
        {message}
      </div>
      <div className={formClasses.Button}>YES</div>
    </div>
  );
};

export default favorites;
