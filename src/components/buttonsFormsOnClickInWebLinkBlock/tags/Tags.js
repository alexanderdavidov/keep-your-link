import React from 'react';
import classes from './Tags.css';

const tags = () => {
  return (
    <div className={classes.Tags}>

      <div className={classes.NewTags}>
        <div className={classes.InputWrapper}>
          <label htmlFor="tagName">Create new tag</label>
          <input type="text" name="tagName" id="tagName" placeholder="Enter new tag" />
          <div className={classes.ButtonWrapperTag}>
            <div className={classes.ButtonCreateTag}>Create Tag</div>
          </div>
        </div>
      </div>

      <div className={classes.OldTags}>
        <div className={classes.TextWrapper}>
          <div>Or choosing from existing</div>
        </div>
      </div>

    </div>
  );
};

export default tags;