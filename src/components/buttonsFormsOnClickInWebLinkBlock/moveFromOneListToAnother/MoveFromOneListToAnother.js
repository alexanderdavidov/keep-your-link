import React from 'react';
import classes from './MoveFromOneListToAnother.css';
import formClasses from '../Form.css';

const moveFromOneListToAnother = () => {
  return (
    <div className={formClasses.Form}>

      <div className={formClasses.WrapperForHeightAndWidth}>

        <div className={formClasses.TextWrapper}>
          <div className={formClasses.MainText}>Move to other list?</div>
          <div className={classes.Caption}>One private list or few public list</div>
        </div>


        <div className={classes.ListsWrapper}>

          <div className={classes.PrivateLists}>
            <div className={classes.ListType}>PRIVATE LISTS</div>
            <div className={classes.Lists}>
              <div className={classes.PrivateList}>Films</div>
              <div className={classes.PrivateList}>Learning English</div>
              <div className={classes.PrivateList}>Why Are We So Certain?</div>
              <div className={classes.PrivateList}>Films</div>
              <div className={classes.PrivateList}>Learning English</div>
              <div className={classes.PrivateList}>Why Are We So Certain?</div>
            </div>
          </div>

          <div className={classes.PublicLists}>
            <div className={classes.ListType}>PUBLIC LISTS</div>
            <div className={classes.Lists}>
              <div className={classes.PublicList}>New List One</div>
              <div className={classes.PublicList}>New List One</div>
              <div className={classes.PublicList}>New List One</div>
            </div>
          </div>

        </div>

      </div>


    </div>
  );
};

export default moveFromOneListToAnother;