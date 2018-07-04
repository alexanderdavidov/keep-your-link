import React from 'react';

// classes
import classes from '../ListItem.css';

// images
import Edit from '../../../assets/images/listsImages/Edit.svg';
import Delete from '../../../assets/images/listsImages/Delete.svg';
import PeopleGroup from '../../../assets/images/listsImages/PeopleGroup.svg';
import Ok from '../../../assets/images/listsImages/Ok.svg';
import DeleteRed from '../../../assets/images/listsImages/DeleteRed.svg';

const publicListItem = (props) => {
  const editImage = <img className={classes.ListButton} src={Edit} alt="Edit" />;
  const peopleGroup = <img className={classes.ListButton} src={PeopleGroup} alt="PeopleGroup" />;
  const deleteImage = <img className={classes.ListButton} src={Delete} alt="Delete" />;

  const ok = <img className={classes.ListButton} src={Ok} alt="Ok" />;
  const deleteRed = <img className={classes.ListButton} src={DeleteRed} alt="DeleteRed" />;

  let style;
  if (props.type === 'active') {
    style = {fontWeight: '400'}
  }
  else if (props.isNew) {
    style = {color: '#d1d1d1'};
  }


  let buttons = [editImage, peopleGroup, deleteImage];
  if (props.isNew) {
    buttons = [ok, deleteRed]
  }

  return (
    <div style={style} className={classes.ListItem}>
      <div className={classes.ListItemDisplayInlineBlock}>{props.children}</div>
      {buttons}
    </div>
  );
};

export default publicListItem;