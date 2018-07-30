import React from 'react';
import classes from './Tags.css';
import formClasses from '../Form.css';

const tags = () => {
  return (
    <div className={formClasses.Form}>

      <div className={formClasses.WrapperForHeightAndWidth}>

        <div className={formClasses.TextWrapper}>
          <div className={formClasses.MainText}>Using new tag?</div>
        </div>

        <div className={classes.InputWrapper}>
          <input autoFocus className={classes.InputElement} type="text" />
          <div className={classes.ButtonWithInput}>CREATE</div>
        </div>

        <div className={formClasses.TextWrapper}>
          <div className={formClasses.MainText}>Using old tags?</div>
        </div>

        <div className={classes.OldTags}>
          <div className={classes.TagName}>&#35;family</div>
          <div className={classes.TagName}>&#35;trip</div>
          <div className={classes.TagName}>&#35;school</div>
          <div className={classes.TagName}>&#35;running</div>
          <div className={classes.TagName}>&#35;tennis</div>

          <div className={classes.TagName}>&#35;family</div>
          <div className={classes.TagName}>&#35;trip</div>
          <div className={classes.TagName}>&#35;school</div>
          <div className={classes.TagName}>&#35;running</div>
          <div className={classes.TagName}>&#35;tennis</div>
          <div className={classes.TagName}>&#35;family</div>
          <div className={classes.TagName}>&#35;trip</div>
          <div className={classes.TagName}>&#35;school</div>
          <div className={classes.TagName}>&#35;running</div>
          <div className={classes.TagName}>&#35;tennis</div>
        </div>

      </div>

    </div>
  );
};

export default tags;