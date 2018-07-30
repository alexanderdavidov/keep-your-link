import React from 'react';
import formClasses from '../Form.css';

const trash = () => {
  return (
    <div className={formClasses.Form}>
      <div className={formClasses.TextWrapper}>
        <div className={formClasses.MainText}>Move to trash?</div>
        <div className={formClasses.Caption}>Auto deleting after 5 days</div>
      </div>
      <div className={formClasses.Button}>YES</div>
    </div>
  );
};

export default trash;