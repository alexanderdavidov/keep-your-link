import React from 'react';
import classes from './Edit.css';
import formClasses from '../Form.css';
import TextareaAutosize from 'react-autosize-textarea';

const edit = () => {
  return (
    <div className={formClasses.Form}>
      <div className={formClasses.WrapperForHeightAndWidth}>

        <div className={formClasses.TextWrapper}>
          <div className={formClasses.MainText}>Edit title?</div>
          <div className={formClasses.Caption}>Enter new title</div>
        </div>

        <div className={classes.TextAreaWrapper}>
          {/*<input className={classes.InputTitle} autoFocus value="Link number: 0" type="text" />*/}
          <TextareaAutosize autoFocus className={classes.TextAreaListTitle} value='Link number: 0 Link number: 0 Link number: 0 Link number: 0'  />
        </div>


      </div>
    </div>
  );
};

export default edit;