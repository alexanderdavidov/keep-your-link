import React from 'react';

// classes
import classes from '../ListItem.css';

// images
import Edit from '../../../assets/images/listsImages/Edit.svg';
import Delete from '../../../assets/images/listsImages/Delete.svg';

const privateListItem = (props) => {
  let style = props.type === 'active' ? {fontWeight: '400'} : null;

  return (
    <div style={style} className={classes.ListItem}>
      <div className={classes.ListItemDisplayInlineBlock}>{props.children}</div>
      <img className={classes.ListButton} src={Edit} alt="Edit" />
      <img className={classes.ListButton} src={Delete} alt="Delete" />
    </div>
  );
};

export default privateListItem;