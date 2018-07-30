import React from 'react';
import formClasses from '../Form.css';

const archive = () => {
  return (
    <div className={formClasses.Form}>
      <div className={formClasses.TextWrapper}>
        <div className={formClasses.MainText}>Move to archive?</div>
      </div>
      <div className={formClasses.Button}>YES</div>
    </div>
  );
};

export default archive;