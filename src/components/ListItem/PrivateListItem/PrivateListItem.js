import React from 'react';

// classes
import classes from '../ListItem.css';

// images
import Edit from '../../../assets/images/listsImages/Edit.svg';
import Delete from '../../../assets/images/listsImages/Delete.svg';

const privateListItem = (props) => {
  return (
    <div>
      <div className={props.customStyle.join(' ')}>{props.children}</div>
      <img className={classes.ListButton} src={Edit} alt="Edit" />
      <img className={classes.ListButton} src={Delete} alt="Delete" />
    </div>
  );
};

export default privateListItem;